const merge = require("webpack-merge");
const common = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const InlineManifestWebpackPlugin = require("inline-manifest-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: require("html-webpack-template"),
      title: "About me | Joshua Hero Dela Cruz | Developer Mode",
      favicon: "./favicon.ico",
      appMountId: "root",
      mobile: true,
      lang: "en-US",
      links: [
        {
          href: "https://fonts.googleapis.com/css?family=Kanit&display=swap",
          rel: "stylesheet"
        }
      ],
      meta: [
        {
          name: "description",
          content: "Front-End Web Developer, Open-Source Enthusiast."
        },
        {
          name: "author",
          content: "Joshua Hero Dela Cruz (Aegir Aideron)"
        },
        {
          viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"
        }
      ],
      googleAnalytics: {
        trackingId: "UA-XXXXXXXXX-X",
        pageViewOnLoad: true
      },
      inlineManifestWebpackName: "webpackManifest"
    }),
    new FaviconsWebpackPlugin("./src/assets/img/icon.png"),
    new InlineManifestWebpackPlugin()
  ]
});
