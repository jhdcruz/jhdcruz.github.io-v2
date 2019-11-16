const merge = require("webpack-merge");
const common = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const InlineManifestWebpackPlugin = require("inline-manifest-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./public"
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: require("html-webpack-template"),
      title: "About me | Joshua Hero Dela Cruz | Developer Mode",
      favicon: "./src/assets/img/icon.png",
      appMountId: "root",
      mobile: true,
      lang: "en-US",
      links: [
        {
          href: "https://fonts.googleapis.com/css?family=Kanit&display=swap",
          rel: "stylesheet"
        },
        {
          rel: "stylesheet",
          href: "https://s.pageclip.co/v1/pageclip.css",
          media: "screen"
        }
      ],
      scripts: [
        {
          src: "https://s.pageclip.co/v1/pageclip.js",
          charset: "utf-8"
        }
      ],
      meta: [
        {
          name: "description",
          content: "Front-End Web Developer, Open-Source Enthusiast."
        },
        {
          name: "owner",
          content: "Joshua Hero Dela Cruz (Aegir Aideron)"
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, shrink-to-fit=no"
        }
      ],
      googleAnalytics: {
        trackingId: "UA-XXXXXXXXX-X",
        pageViewOnLoad: true
      },
      inlineManifestWebpackName: "webpackManifest"
    }),
    new InlineManifestWebpackPlugin()
  ]
});
