const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const images = require("next-images");
const bundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const baseUrl = "";

module.exports = withPlugins([
  images,
  [
    optimizedImages,
    {
      inlineImageLimit: 8192,
      handleImages: ["jpeg", "png", "svg", "webp", "gif"],
      removeOriginalExtension: true,
      optimizeImages: true,
      optimizeImagesInDev: true,
      defaultImageLoader: "responsive-loader",
      responsive: {
        adapter: require("responsive-loader/sharp"),
      },
      mozjpeg: {
        quality: 80,
      },
      optipng: {
        optimizationLevel: 3,
      },
      webp: {
        preset: "default",
        quality: 75,
      },
    },
  ],
  [
    bundleAnalyzer,
    {
      trailingSlash: true,
      basePath: baseUrl,
      env: {
        baseUrl: baseUrl,
      },
    },
  ],
]);
