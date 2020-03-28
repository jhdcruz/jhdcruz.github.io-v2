const merge = require("webpack-merge");
const common = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: require("html-webpack-template"),
      title: "About me | Joshua Hero Dela Cruz",
      favicon: "./src/shared/img/icon.png",
      appMountId: "root",
      mobile: true,
      lang: "en-US",
      showErrors: false,
      meta: [
        {
          name: "description",
          content: "Front-End Web Developer, Open-Source Enthusiast."
        },
        {
          name: "owner",
          content: "Joshua Hero Dela Cruz (Aegir Aideron)"
        }
      ],
      links: [
        {
          rel: "preload",
          href:
            "https://fonts.googleapis.com/css?family=Kanit:400,600&display=swap",
          as: "style"
        },
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css?family=Kanit:400,600&display=swap"
        }
      ],
      googleAnalytics: {
        trackingId: "UA-131928651-1",
        pageViewOnLoad: true
      }
    })
  ]
});
