wasm-debug:
	wasm-pack build --debug
	rm pkg/.gitignore
	npx webpack

wasm:
	wasm-pack build --release
	rm pkg/.gitignore
	npx cross-env NODE_ENV=production webpack

demo-release:
	cargo build --no-default-features --features build-demo --release

demo-debug:
	cargo build --no-default-features --features build-demo
