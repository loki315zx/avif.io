export async function lib() {
    const pkg = await import("./pkg")
    pkg.memory = (await import("./pkg/conversion_bg")).memory
    return pkg
}
