const withPlugins = require("next-compose-plugins");
const bundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const baseUrl = "";

module.exports = withPlugins([
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
