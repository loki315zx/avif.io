const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  entry: "./src/index.tsx",
  mode: isProduction ? "production" : "development",
  devtool: isProduction ? undefined : "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg|avif)(\?[a-z0-9=.]+)?$/,
        loader: "url-loader",
      },
    ],
  },
  optimization: isProduction
    ? {
        emitOnErrors: false,
        minimize: true,
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              output: {
                comments: false,
              },
            },
            extractComments: false,
          }),
        ],
      }
    : undefined,
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
