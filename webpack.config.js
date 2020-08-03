const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const sourcePath = path.resolve(__dirname, "./src");
const distPath = path.resolve(__dirname, "./dist");

module.exports = {
  entry: "./src/AvatarComponent.js",
  output: {
    filename: "AvatarComponent.js",
    path: distPath,
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: "url-loader",
        },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: path.join(sourcePath, "assets"), to: "assets" }],
    }),
  ],
};
