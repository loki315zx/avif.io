pub use avif::{ConversionOptions, convert_to_avif};
#[cfg(feature = "build-wasm")]
pub use wasm::*;
pub use yuv::Subsampling;

mod yuv;
mod wasm;
mod avif;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "build-wasm")]
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

