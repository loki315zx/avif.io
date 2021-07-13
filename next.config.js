/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const withPlugins = require("next-compose-plugins");
const images = require("next-images");
const bundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const baseUrl = "";

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = withPlugins(
  [
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
  ],
  nextConfig
);
