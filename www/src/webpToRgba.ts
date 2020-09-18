let module: any = undefined

export default async function webpToRgba(data: Uint8Array): Promise<ImageData> {
    if (module === undefined) {
        const {default: Module} = await import("./webp_wasm")
        module = await Module()
    }

    const webpToCanvas = module.cwrap('WebpToSDL', 'number', ['array', 'number']);
    const canvas = document.createElement('canvas')
    canvas.hidden = true
    document.body.append(canvas)
    module.canvas = canvas
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // TODO Should I delete the canvas after?
    webpToCanvas(data, data.length)
    return ctx.getImageData(0, 0, canvas.width, canvas.height)
}
