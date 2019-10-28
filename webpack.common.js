const webpack = require("webpack");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: ["react-hot-loader/patch", "./src/index.jsx"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                outputStyle: "compressed"
              }
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new InlineManifestWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      template: require("html-webpack-template"),
      title: "About me | Joshua Hero Dela Cruz",
      appMountId: "root",
      mobile: true,
      lang: "en-US",
      links: [
        "https://fonts.googleapis.com/css?family=Roboto",
        {
          href: "/icon-192.png",
          rel: "apple-touch-icon",
          sizes: "192x192"
        },
        {
          href: "/icon-512.png",
          rel: "icon",
          sizes: "512x512",
          type: "image/png"
        }
      ],
      meta: [
        {
          name: "description",
          content: "A better default template for html-webpack-plugin."
        },
        {
          name: "author",
          content: "Joshua Hero Dela Cruz (Jhdcruz)"
        }
      ],
      googleAnalytics: {
        trackingId: "UA-XXXX-XX",
        pageViewOnLoad: true
      },
      inlineManifestWebpackName: "webpackManifest"
    })
  ]
};
