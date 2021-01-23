// Import dependencies
const sharp = require("sharp");
const fs = require("fs");

fs.readdir("../public/imagesources/", (err, files) => {
  console.log("Found " + files.length + " files.");

  files.forEach((file) => {
    if (file.endsWith(".png") || file.endsWith(".jpg") || file.endsWith(".jpeg")) {
      if (file.endsWith(".png")) {
        fileShort = file.replace(".png", "");
      }
      if (file.endsWith(".jpg")) {
        fileShort = file.replace(".jpg", "");
      }
      if (file.endsWith(".jpeg")) {
        fileShort = file.replace(".jpg", "");
      }
      console.log(fileShort);
      //
      sharp("../public/imagesources/" + file)
        .jpeg({ quality: 80, progressive: true })
        .toFile("../public/images/" + fileShort + ".jpg");
      //
      sharp("../public/imagesources/" + file)
        .webp({ quality: 80, reductionEffort: 6 })
        .toFile("../public/images/" + fileShort + ".webp");
      //
      sharp("../public/imagesources/" + file)
        .avif({ quality: 80, speed: 4 })
        .toFile("../public/images/" + fileShort + ".avif");
      sharp("../public/imagesources/" + file)
        .resize({ width: 1440 })
        .jpeg({ quality: 80, progressive: true })
        .toFile("../public/images/" + fileShort + "-1440.jpg");
      //
      sharp("../public/imagesources/" + file)
        .resize({ width: 1080 })
        .jpeg({ quality: 80, progressive: true })
        .toFile("../public/images/" + fileShort + "-1080.jpg");
      //
      sharp("../public/imagesources/" + file)
        .resize({ width: 720 })
        .jpeg({ quality: 80, progressive: true })
        .toFile("../public/images/" + fileShort + "-720.jpg");
      //
      sharp("../public/imagesources/" + file)
        .resize({ width: 540 })
        .jpeg({ quality: 80, progressive: true })
        .toFile("../public/images/" + fileShort + "-540.jpg");
      //
      sharp("../public/imagesources/" + file)
        .resize({ width: 360 })
        .jpeg({ quality: 80, progressive: true })
        .toFile("../public/images/" + fileShort + "-360.jpg");
      //
      sharp("../public/imagesources/" + file)
        .resize({ width: 1440 })
        .webp({ quality: 80, reductionEffort: 6 })
        .toFile("../public/images/" + fileShort + "-1440.webp");
      //
      sharp("../public/imagesources/" + file)
        .resize({ width: 1080 })
        .webp({ quality: 80, reductionEffort: 6 })
        .toFile("../public/images/" + fileShort + "-1080.webp");
      //
      sharp("../public/imagesources/" + file)
        .resize({ width: 720 })
        .webp({ quality: 80, reductionEffort: 6 })
        .toFile("../public/images/" + fileShort + "-720.webp");
      //
      sharp("../public/imagesources/" + file)
        .resize({ width: 540 })
        .webp({ quality: 80, reductionEffort: 6 })
        .toFile("../public/images/" + fileShort + "-540.webp");
      //
      sharp("../public/imagesources/" + file)
        .resize({ width: 360 })
        .webp({ quality: 80, reductionEffort: 6 })
        .toFile("../public/images/" + fileShort + "-360.webp");

      //
      sharp("../public/imagesources/" + file)
        .resize({ width: 1440 })
        .avif({ quality: 80, speed: 4 })
        .toFile("../public/images/" + fileShort + "-1440.avif");
      //
      sharp("../public/imagesources/" + file)
        .resize({ width: 1080 })
        .avif({ quality: 80, speed: 4 })
        .toFile("../public/images/" + fileShort + "-1080.avif");
      //
      sharp("../public/imagesources/" + file)
        .resize({ width: 720 })
        .avif({ quality: 80, speed: 4 })
        .toFile("../public/images/" + fileShort + "-720.avif");
      //
      sharp("../public/imagesources/" + file)
        .resize({ width: 540 })
        .avif({ quality: 80, speed: 4 })
        .toFile("../public/images/" + fileShort + "-540.avif");
      //
      sharp("../public/imagesources/" + file)
        .resize({ width: 360 })
        .avif({ quality: 80, speed: 4 })
        .toFile("../public/images/" + fileShort + "-360.avif");
    }
  });
});
