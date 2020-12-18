const withImages = require("next-images");
module.exports = withImages();
module.exports = withImages({ InlineImageLimit: 16384 });
