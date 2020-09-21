use std::io::Cursor;

use image::{self, error::ImageResult, GenericImageView};
use rav1e::prelude::EncoderConfig;

use crate::yuv420::{self, YUV};

pub fn convert_to_avif(data: &[u8]) -> ImageResult<Vec<u8>> {
    let reader =
        image::io::Reader::new(Cursor::new(data))
            .with_guessed_format()
            .unwrap();
    let image = reader.decode()?;
    let yuv = yuv420::from_image(&image);
    let (w, h) = image.dimensions();
    Ok(encode_avif(&yuv, w as usize, h as usize))
}

pub fn encode_avif(
    yuv: &YUV,
    width: usize,
    height: usize,
) -> Vec<u8> {
    let mut encoder_config = EncoderConfig::with_speed_preset(10);
    encoder_config.chroma_sampling = rav1e::color::ChromaSampling::Cs420;
    encoder_config.width = width;
    encoder_config.height = height;
    encoder_config.still_picture = true;
    let mut ctx: rav1e::Context<u8> = rav1e::Config { enc: encoder_config, threads: 0 }.new_context().unwrap();
    let mut frame = ctx.new_frame();
    frame.planes[0].copy_from_raw_u8(&yuv.y, width, 1);
    frame.planes[1].copy_from_raw_u8(&yuv.u, width / 2, 1);
    frame.planes[2].copy_from_raw_u8(&yuv.v, width / 2, 1);
    ctx.send_frame(frame).unwrap();
    ctx.flush();
    let encoded_data = ctx.receive_packet().unwrap().data;
    avif_serialize::serialize_to_vec(
        &encoded_data, None, width as u32, height as u32, 8)
}
