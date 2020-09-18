onmessage = async function (msg) {
    importScripts("conversion.js")

    const {
        convert_to_avif: convertToAvif,
        raw_rgba_to_avif: rawRgbaToAvif,
        memory
    } = await conversion.lib()

    const result = convertInput()
    postResult(result)

    function convertInput() {
        const input = new Uint8Array(msg.data.input)
        if (msg.data.isRawRgba) {
            return rawRgbaToAvif(input, msg.data.width, msg.data.height, postProgress)
        } else {
            return convertToAvif(input, postProgress)
        }
    }

    function postProgress(progress) {
        postMessage({
            type: "progress",
            progress,
        }, [])
    }

    function postResult(result) {
        if (result.error_size !== 0) {
            const errorData = new Uint8Array(memory.buffer, result.error, result.error_size);
            const error = new TextDecoder().decode(errorData)
            postMessage({
                type: "error",
                error,
            }, [])
        }

        const data = new Uint8Array(memory.buffer, result.data, result.size)
        postMessage({
            type: "finished",
            data,
        }, [])
    }
}
