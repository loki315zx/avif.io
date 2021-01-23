// Import dependencies
const sharp = require("sharp");
const fs = require("fs");

fs.readdir("../images/", (err, files) => {
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
        fileShort = file.replace(".jpeg", "");
      }
      console.log(fileShort);
      //
      sharp("../images/" + file)
        .jpeg({ quality: 70, progressive: true })
        .toFile("../public/images/" + fileShort + ".jpg");
      //
      sharp("../images/" + file)
        .webp({ quality: 70, reductionEffort: 6 })
        .toFile("../public/images/" + fileShort + ".webp");
      //
      sharp("../images/" + file)
        .avif({ quality: 70, speed: 0 })
        .toFile("../public/images/" + fileShort + ".avif");
      //
      sharp("../images/" + file)
        .resize({ width: 1440 })
        .jpeg({ quality: 70, progressive: true })
        .toFile("../public/images/" + fileShort + "-1440.jpg");
      //
      sharp("../images/" + file)
        .resize({ width: 720 })
        .jpeg({ quality: 70, progressive: true })
        .toFile("../public/images/" + fileShort + "-720.jpg");
      //
      sharp("../images/" + file)
        .resize({ width: 540 })
        .jpeg({ quality: 70, progressive: true })
        .toFile("../public/images/" + fileShort + "-540.jpg");
      //
      sharp("../images/" + file)
        .resize({ width: 360 })
        .jpeg({ quality: 70, progressive: true })
        .toFile("../public/images/" + fileShort + "-360.jpg");
      //
      sharp("../images/" + file)
        .resize({ width: 1440 })
        .webp({ quality: 70, reductionEffort: 6 })
        .toFile("../public/images/" + fileShort + "-1440.webp");
      //
      sharp("../images/" + file)
        .resize({ width: 720 })
        .webp({ quality: 70, reductionEffort: 6 })
        .toFile("../public/images/" + fileShort + "-720.webp");
      //
      sharp("../images/" + file)
        .resize({ width: 540 })
        .webp({ quality: 70, reductionEffort: 6 })
        .toFile("../public/images/" + fileShort + "-540.webp");
      //
      sharp("../images/" + file)
        .resize({ width: 360 })
        .webp({ quality: 70, reductionEffort: 6 })
        .toFile("../public/images/" + fileShort + "-360.webp");
      //
      sharp("../images/" + file)
        .resize({ width: 1440 })
        .avif({ quality: 70, speed: 0 })
        .toFile("../public/images/" + fileShort + "-1440.avif");
      //
      sharp("../images/" + file)
        .resize({ width: 720 })
        .avif({ quality: 70, speed: 0 })
        .toFile("../public/images/" + fileShort + "-720.avif");
      //
      sharp("../images/" + file)
        .resize({ width: 540 })
        .avif({ quality: 70, speed: 0 })
        .toFile("../public/images/" + fileShort + "-540.avif");
      //
      sharp("../images/" + file)
        .resize({ width: 360 })
        .avif({ quality: 70, speed: 0 })
        .toFile("../public/images/" + fileShort + "-360.avif");
    }
  });
});
