const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const output = "../public/images/";
const input = "../images/";
const jpgQuality = { quality: 70, progressive: true };
const webpQuality = { quality: 70, reductionEffort: 0 };
const avifQuality = { quality: 70, speed: 6 };
const sizes = [1440, 720, 630, 540, 450, 360];

fs.readdir(input, (err, files) => {
  console.log("Found " + files.length + " files.");

  files.forEach((file) => {
    function convert(size) {
      sharp(input + file)
        .jpeg(jpgQuality)
        .resize({ width: size })
        .toFile(output + fileShort + "-" + size + ".jpg");
      sharp(input + file)
        .webp(webpQuality)
        .resize({ width: size })
        .toFile(output + fileShort + "-" + size + ".webp");
      sharp(input + file)
        .avif(avifQuality)
        .resize({ width: size })
        .toFile(output + fileShort + "-" + size + ".avif");
    }
    if (file.endsWith(".png") || file.endsWith(".jpg") || file.endsWith(".jpeg")) {
      fileShort = path.parse(file).name;
      for (let i = 0; i < sizes.length; i++) {
        convert(sizes[i]);
      }
    }
  });
});
