onmessage = async function (msg) {
  importScripts("dist/conversion.js");

  const {
    convert_to_avif: convertToAvif,
    rgba_to_avif: rgbaToAvif,
    ConversionOptions,
    Subsampling,
    memory,
  } = await conversion.lib();

  const result = convertInput();
  postResult(result);

  function convertInput() {
    const input = new Uint8Array(msg.data.input);
    const options = new ConversionOptions(
      msg.data.options.effort,
      msg.data.options.quality,
      msg.data.options.useYuv444 ? Subsampling.YUV444 : Subsampling.YUV420,
      msg.data.options.keepTransparency
    );
    if (msg.data.isRawRgba) {
      return rgbaToAvif(input, options, msg.data.width, msg.data.height, postProgress);
    } else {
      return convertToAvif(input, options, postProgress);
    }
  }

  function postProgress(progress) {
    postMessage(
      {
        type: "progress",
        progress,
      },
      []
    );
  }

  function postResult(result) {
    if (result.error_size !== 0) {
      const errorData = new Uint8Array(memory.buffer, result.error, result.error_size);
      const error = new TextDecoder().decode(errorData);
      postMessage(
        {
          type: "error",
          error,
        },
        []
      );
    }

    const data = new Uint8Array(memory.buffer, result.data, result.size);
    postMessage(
      {
        type: "finished",
        data,
      },
      []
    );
  }
};
