const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const output = "../public/img/";
const input = "../images/";
const jpgQuality = { mozjpeg: true, quality: 50, progressive: true };
const webpQuality = { quality: 50, reductionEffort: 3 };
const avifQuality = { quality: 45, speed: 3 };
const sizes = [1440, 720, 540, 360];

fs.readdir(input, (err, files) => {
  console.log("Found " + files.length + " files. Converting now, please be patient..");
  files.forEach((file) => {
    let fileShort = path.parse(file).name;
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
    if (file.endsWith(".avif")) {
      sharp(input + file).toFile(output + fileShort + ".avif");
    }
    if (file.endsWith(".jpg")) {
      sharp(input + file).toFile(output + fileShort + ".jpg");
    }
    for (let i = 0; i < sizes.length; i++) {
      convert(sizes[i]);
    }
  });
});
