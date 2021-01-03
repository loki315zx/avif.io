const withPlugins = require("next-compose-plugins");
const images = require("next-images");
const bundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const baseUrl = "";

module.exports = withPlugins([
  images,
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
