const merge = require("webpack-merge");
const common = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const InlineManifestWebpackPlugin = require("inline-manifest-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  optimization: {
    moduleIds: "hashed",
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]yarn.lock[\\/]/,
          chunks: "all"
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: require("html-webpack-template"),
      title: "About me | Joshua Hero Dela Cruz",
      favicon: "images/icon.png",
      appMountId: "root",
      mobile: true,
      lang: "en-US",
      showErrors: false,
      links: [
        {
          href: "icon-192.png",
          rel: "apple-touch-icon",
          sizes: "192x192"
        },
        {
          href: "icon-512.png",
          rel: "icon",
          sizes: "512x512",
          type: "image/png"
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
        }
      ],
      googleAnalytics: {
        trackingId: "UA-131928651-1",
        pageViewOnLoad: true
      },
      inlineManifestWebpackName: "webpackManifest"
    }),
    new InlineManifestWebpackPlugin()
  ]
});
