use conversion;
use std::env;
use std::fs;
use std::io::{Read, Write};
use rav1e;

fn main() {
    unsafe {
        rav1e::ON_PROGRESS = Some(
            Box::new(|progress| println!("{}%", (progress * 100.0) as u32))
        );
    }

    let args: Vec<_> = env::args().collect();
    let mut input = Vec::new();
    fs::File::open(&args[1]).unwrap().read_to_end(&mut input).unwrap();
    let input = input;
    let result = conversion::convert_to_avif(&input, &conversion::ConversionOptions {
        quality: 100,
        subsampling: conversion::Subsampling::YUV420,
    }).unwrap();
    let mut output_file = fs::File::create(args[1].clone() + ".avif").unwrap();
    output_file.write_all(&result).unwrap();
}
