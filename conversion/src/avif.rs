use std::io::Cursor;

use image::{self, error::ImageResult, GenericImageView};
use rav1e::color::ChromaSampling;
use rav1e::Frame;
use rav1e::prelude::EncoderConfig;
use wasm_bindgen::prelude::*;

use crate::yuv::{self, Subsampling, YUV};

#[wasm_bindgen]
pub struct ConversionOptions {
    /// Quality of conversion as a percentage from 0 to 100.
    pub quality: u32,
    pub subsampling: Subsampling,
}

#[wasm_bindgen]
impl ConversionOptions {
    #[cfg(feature = "build-wasm")]
    #[wasm_bindgen(constructor)]
    pub fn new(quality: u32, subsampling: Subsampling) -> Self {
        Self { quality, subsampling }
    }
}

pub fn convert_to_avif(data: &[u8], options: &ConversionOptions) -> ImageResult<Vec<u8>> {
    let reader =
        image::io::Reader::new(Cursor::new(data))
            .with_guessed_format()
            .unwrap();
    let image = reader.decode()?;
    let yuv = yuv::from_image(&image, options.subsampling);
    let (w, h) = image.dimensions();
    Ok(encode_avif(&yuv, options, w as usize, h as usize))
}

pub fn encode_avif(
    yuv: &YUV,
    options: &ConversionOptions,
    width: usize,
    height: usize,
) -> Vec<u8> {
    assert_eq!(options.subsampling, yuv.subsampling);

    let mut ctx: rav1e::Context<u8> = rav1e::Config {
        enc: create_encoder_config(options, width, height),
        threads: 0,
    }.new_context().unwrap();
    let frame = create_av1_frame(yuv, &ctx, width);
    ctx.send_frame(frame).unwrap();
    ctx.flush();
    let encoded_data = ctx.receive_packet().unwrap().data;
    avif_serialize::serialize_to_vec(
        &encoded_data, None, width as u32, height as u32, 8)
}

fn create_encoder_config(options: &ConversionOptions, width: usize, height: usize) -> EncoderConfig {
    assert!(options.quality <= 100);

    let speed = (10 - (options.quality / 20)) as usize;
    web_sys::console::log_1(&JsValue::from(speed as i32));
    let mut encoder_config = EncoderConfig::with_speed_preset(speed);
    encoder_config.chroma_sampling = to_av1_chroma_sampling(options.subsampling);
    encoder_config.width = width;
    encoder_config.height = height;
    encoder_config.still_picture = true;
    encoder_config
}

fn to_av1_chroma_sampling(subsampling: Subsampling) -> ChromaSampling {
    match subsampling {
        Subsampling::YUV420 => ChromaSampling::Cs420,
        Subsampling::YUV444 => ChromaSampling::Cs444,
    }
}

fn create_av1_frame(yuv: &YUV, ctx: &rav1e::Context<u8>, width: usize) -> Frame<u8> {
    let mut frame = ctx.new_frame();
    frame.planes[0].copy_from_raw_u8(&yuv.y, width, 1);
    let stride = match yuv.subsampling {
        Subsampling::YUV444 => width,
        Subsampling::YUV420 => width / 2,
    };
    frame.planes[1].copy_from_raw_u8(&yuv.u, stride, 1);
    frame.planes[2].copy_from_raw_u8(&yuv.v, stride, 1);
    frame
}
