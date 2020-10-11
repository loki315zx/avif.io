use std::io::Cursor;

use image::{self, error::ImageResult, RgbaImage};
use rav1e::color::ChromaSampling;
use rav1e::Frame;
use rav1e::prelude::EncoderConfig;
use wasm_bindgen::prelude::*;

use crate::yuv::{self, Subsampling, YUV};

#[wasm_bindgen]
pub struct ConversionOptions {
    /// Effort of conversion as a percentage from 0 to 100.
    pub effort: u8,
    /// Quality of conversion as a percentage from 0 to 100.
    pub quality: u8,
    pub subsampling: Subsampling,
    pub keep_transparency: bool,
}

#[wasm_bindgen]
impl ConversionOptions {
    #[cfg(feature = "build-wasm")]
    #[wasm_bindgen(constructor)]
    pub fn new(
        effort: u8,
        quality: u8,
        subsampling: Subsampling,
        keep_transparency: bool,
    ) -> Self {
        Self { effort, quality, subsampling, keep_transparency }
    }
}

pub fn convert_to_avif(data: &[u8], options: &ConversionOptions) -> ImageResult<Vec<u8>> {
    let reader =
        image::io::Reader::new(Cursor::new(data))
            .with_guessed_format()
            .unwrap();
    let image = reader.decode()?.into_rgba();
    Ok(convert_rgba_to_avif(&image, options))
}

pub fn convert_rgba_to_avif(image: &RgbaImage, options: &ConversionOptions) -> Vec<u8> {
    let yuv = yuv::from_image(
        &image,
        options.subsampling,
    );
    let (w, h) = image.dimensions();
    if options.keep_transparency {
        let alpha: Vec<_> = alpha_channel(&image).collect();
        encode_avif(&yuv, options, Some(&alpha), w as usize, h as usize)
    } else {
        encode_avif(&yuv, options, None, w as usize, h as usize)
    }
}

pub fn encode_avif(
    yuv: &YUV,
    options: &ConversionOptions,
    alpha: Option<&[u8]>,
    width: usize,
    height: usize,
) -> Vec<u8> {
    assert_eq!(options.subsampling, yuv.subsampling);

    let encoder_config = create_encoder_config(options, width, height);
    let encoded_data = encode_av1_frame(yuv, width, encoder_config);
    match alpha {
        Some(alpha) => {
            let mut encoder_config = EncoderConfig::with_speed_preset(10);
            encoder_config.chroma_sampling = ChromaSampling::Cs400;
            encoder_config.width = width;
            encoder_config.height = height;
            encoder_config.still_picture = true;
            let alpha = encode_av1_frame(
                &yuv::from_alpha(alpha),
                width,
                encoder_config,
            );
            avif_serialize::serialize_to_vec(&encoded_data, Some(alpha.as_slice()), width as u32, height as u32, 8)
        }
        None => avif_serialize::serialize_to_vec(&encoded_data, None, width as u32, height as u32, 8)
    }
}

fn encode_av1_frame(yuv: &YUV, width: usize, encoder_config: EncoderConfig) -> Vec<u8> {
    let mut ctx: rav1e::Context<u8> = rav1e::Config::new()
        .with_encoder_config(encoder_config)
        .with_threads(0)
        .new_context()
        .unwrap();
    let frame = create_av1_frame(yuv, &ctx, width);
    ctx.send_frame(frame).unwrap();
    ctx.flush();
    ctx.receive_packet().unwrap().data
}

fn create_encoder_config(options: &ConversionOptions, width: usize, height: usize) -> EncoderConfig {
    assert!(options.effort <= 100);
    assert!(options.quality <= 100);

    let speed = (10 - (options.effort / 20)) as usize;
    let mut encoder_config = EncoderConfig::with_speed_preset(speed);
    encoder_config.quantizer = 255 - (options.quality as usize) * 255 / 100;
    encoder_config.min_quantizer = encoder_config.quantizer as u8;
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
        Subsampling::YUV400 => ChromaSampling::Cs400,
    }
}

fn create_av1_frame(yuv: &YUV, ctx: &rav1e::Context<u8>, width: usize) -> Frame<u8> {
    let mut frame = ctx.new_frame();
    frame.planes[0].copy_from_raw_u8(&yuv.y, width, 1);
    let stride = match yuv.subsampling {
        Subsampling::YUV444 => width,
        Subsampling::YUV420 => width / 2,
        Subsampling::YUV400 => return frame,
    };
    frame.planes[1].copy_from_raw_u8(&yuv.u, stride, 1);
    frame.planes[2].copy_from_raw_u8(&yuv.v, stride, 1);
    frame
}

pub fn alpha_channel<'a>(image: &'a RgbaImage) -> impl Iterator<Item=u8> + 'a {
    image.pixels().map(|p| p.0[3])
}
