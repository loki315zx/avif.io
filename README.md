# avif.io

You can use AVIF.io to convert a wide variety of file formats into AVIF, directly inside your web browser. Converted files are never sent to the server, and the entire conversion process is performed locally.


## How does the conversion work?

We use [Rust](https://rust-lang.org/) with [wasm-pack](https://github.com/rustwasm/wasm-pack)
to compile a converter library into WASM and call the Rust code
in the browser, from a WebWorker. The program uses Rust's
[image library](https://crates.io/crates/image) to decode files,
and for encoding to AVIF we use a fork of [rav1e](https://github.com/ennmichael/rav1e)
modified to allow for proper progress updates.
The Rust code is in `conversion/`.

## Details

The root of the project is a [Next.js](https://nextjs.org) application
written in [TypeScript](https://typescriptlang.org/).
You can run the application via `npm start`, and watch and reload the
files via `npm develop`. The `wasm-pack`ed Rust code ends up in `public/dist`.

## Building the Rust code

Building Rust requires `cargo` and `make`. To build the wasm
code for release, use:

```bash
cd conversion/
make wasm
```
This will also run webpack to move the produced WASM and JS
files to `public/dist`. Keep in mind that when you clone the repository
the Rust code will already have been compiled, so you don't have to
do this step yourself.

Using make, you can use `make wasm-debug` to build the WASM code
for debugging, or use `make demo-debug` to build a demo binary
to test out the Rust code in a non-WASM environment.

## WebP

At the time of writing, the `image` library has very incomplete
support for the WebP format. Instead, we use a special build of
[libwebp](https://github.com/webmproject/libwebp/) called webp_js,
which allows us to decode WebP files in the browser using the
canvas web API. This is important to keep in mind — WebP handling
is a special case at the moment, so don't be surprised that some
of the code is explicitly checking whether it's working with WebP.

## Installing dependencies and building the front-end

You can find the related commands in the package.json file.
