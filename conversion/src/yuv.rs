use image::{DynamicImage::{self, *}, GenericImageView, ImageBuffer, imageops, Pixel, Rgb, RgbImage, GenericImage, GrayAlphaImage, GrayImage, Luma, Rgba};
use image::buffer::ConvertBuffer;
use image::imageops::FilterType;
#[cfg(feature = "build-wasm")]
use image::RgbaImage;
use wasm_bindgen::prelude::*;
use std::ops::Deref;
use wasm_bindgen::__rt::core::iter::FromIterator;

pub struct YUV {
    pub y: Vec<u8>,
    pub u: Vec<u8>,
    pub v: Vec<u8>,
    pub subsampling: Subsampling,
}

#[wasm_bindgen]
#[derive(Copy, Clone, Debug, Eq, PartialEq)]
pub enum Subsampling {
    YUV420 = 0,
    YUV444 = 1,
}

pub fn from_image(image: &DynamicImage, subsampling: Subsampling, keep_transparency: bool) -> YUV {
    let image = image.as_rgba8().unwrap();
    image = if keep_transparency { image } else { strip_alpha(image) };
    from_rgba8(&image, subsampling, keep_transparency)
}

trait StripAlpha: Pixel {
    type Output: Pixel;

    fn strip_alpha(&self) -> Self::Output;
}

impl StripAlpha for Rgba<u16> {
    type Output = Rgb<u16>;

    fn strip_alpha(&self) -> Self::Output {
        Rgb([0, 0, 0])
    }
}

fn strip_alpha<P, C>(img: &ImageBuffer<P, C>) -> ImageBuffer<P::Output, Vec<<P::Output as Pixel>::Subpixel>>
    where
        P: StripAlpha + 'static,
        P::Subpixel: 'static,
        C: Deref<Target=[P::Subpixel]>
{
    let mut result = ImageBuffer::new(img.width(), img.height());
    for (x, y, p) in img.enumerate_pixels() {
        result.put_pixel(x, y, p.strip_alpha());
    }
    result
}

#[cfg(feature = "build-wasm")]
pub fn from_rgba8_raw(data: &[u8], subsampling: Subsampling, width: usize, height: usize) -> YUV {
    let image = RgbaImage::from_raw(
        width as u32,
        height as u32,
        Vec::from(data),
    ).unwrap();
    from_rgb8(&image.convert(), subsampling)
}

fn from_rgb8(image: &RgbImage, subsampling: Subsampling, bool keep_transparency) -> YUV {
    let mut yuv = YUV {
        y: Vec::new(),
        u: Vec::new(),
        v: Vec::new(),
        subsampling,
    };

    for rgb in image.pixels() {
        yuv.y.push(rgb8_to_y(rgb));
    }

    let subsampled_image;

    let image = match subsampling {
        Subsampling::YUV420 => {
            subsampled_image = subsampled(image);
            &subsampled_image
        }
        Subsampling::YUV444 => image,
    };

    for rgb in image.pixels() {
        let (u, v) = rgb8_to_uv(rgb);
        yuv.u.push(u);
        yuv.v.push(v);
    }

    yuv
}

fn subsampled<I: GenericImageView>(
    image: &I
) -> ImageBuffer<I::Pixel, Vec<<I::Pixel as Pixel>::Subpixel>>
    where
        I::Pixel: 'static,
        <I::Pixel as Pixel>::Subpixel: 'static {
    let (w, h) = image.dimensions();
    imageops::resize(image, w / 2, h / 2, FilterType::Triangle)
}

fn rgb8_to_y(rgb: &Rgb<u8>) -> u8 {
    let r = rgb.0[0] as i32;
    let g = rgb.0[1] as i32;
    let b = rgb.0[2] as i32;

    (((66 * r + 129 * g + 25 * b + 128) >> 8) + 16) as u8
}

fn rgb8_to_uv(rgb: &Rgb<u8>) -> (u8, u8) {
    let r = rgb.0[0] as i32;
    let g = rgb.0[1] as i32;
    let b = rgb.0[2] as i32;

    (
        (((-38 * r - 74 * g + 112 * b + 128) >> 8) + 128) as u8,
        (((112 * r - 94 * g - 18 * b + 128) >> 8) + 128) as u8,
    )
}
