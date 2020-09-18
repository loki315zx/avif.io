wasm-debug:
	wasm-pack build --debug
	rm pkg/.gitignore
	npx webpack

wasm:
	wasm-pack build --release
	rm pkg/.gitignore
	npx webpack

demo-debug:
	cargo build --no-default-features --features build-demo
