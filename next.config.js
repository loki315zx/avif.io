const withImages = require("next-images");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const baseUrl = "";

const nextConfig = {
  bundleAnalyzerConfig: {
    trailingSlash: true,
    basePath: baseUrl,
    env: {
      baseUrl: baseUrl,
    },
  },
};

module.exports = withImages(withBundleAnalyzer(nextConfig));
