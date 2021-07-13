# AVIF.IO

avif.io is a website for converting a wide variety of file
formats into AVIF, directly inside the browser.
The converted files never get sent to the
server, and the entire conversion process happens
client-side.


## How?

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
files via `npm dev`. The `wasm-pack`ed Rust code ends up in `public/dist`.

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

First, we will install the dependencies:

```bash
npm i -D
```

Next, we are going to export the code as a pre-rendered static web app:

```bash
npm run export
```

Package the WASM code:

```bash
cd ../conversion
npx cross-env NODE_ENV=production webpack
```

Now, you can run the server locally using `npm run start`,
or you can deploy it to a static web server by copying everything
from `out/` to the server.

## Blogging

You can add blogs by adding `.tsx` files to the `pages/blogs` folder and
you can update the blog list by editing the `pages/blogs/index.tsx` file.
If you would like to modify the layout of the entire website, you can do
that by editing `pages/_app.tsx`. Don't forget to put all components in the
`/components` directory. If you accidentaly put them in `pages` they will be
accessible via public routes, which is probably not what you intended.
