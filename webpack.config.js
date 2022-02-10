const path = require("path");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const commonConfig = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].js",
    chunkFilename: "[name].[id].chunk.js",
  },
  resolve: {
    modules: ["node_modules"],
    alias: {
      images: path.join(__dirname, "./src/shared/img"),
      components: path.join(__dirname, "./src/components"),
      layouts: path.join(__dirname, "./src/layouts"),
      dependency: path.join(__dirname, "node_modules"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["stylelint-custom-processor-loader", "babel-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                fibers: false,
                outputStyle: "compressed",
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        use: "file-loader",
      },
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: "file-loader",
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};

const productionConfig = {
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
          content: "Front-End Web Developer, Open-Source Enthusiast.",
        },
        {
          name: "owner",
          content: "Joshua Hero Dela Cruz (Aegir Aideron)",
        },
      ],
      links: [
        {
          rel: "preload",
          href: "https://fonts.googleapis.com/css?family=Kanit:400,600&display=swap",
          as: "style",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Kanit:400,600&display=swap",
        },
      ],
      googleAnalytics: {
        trackingId: "UA-131928651-1",
        pageViewOnLoad: true,
      },
    }),
  ],
};

const developmentConfig = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./public",
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: require("html-webpack-template"),
      title: "About me | Joshua Hero Dela Cruz | Developer Mode",
      favicon: "./src/shared/img/icon.png",
      appMountId: "root",
      mobile: true,
      lang: "en-US",
      meta: [
        {
          name: "description",
          content: "Front-End Web Developer, Open-Source Enthusiast.",
        },
        {
          name: "owner",
          content: "Joshua Hero Dela Cruz (Aegir Aideron)",
        },
      ],
      links: [
        {
          rel: "preload",
          href: "https://fonts.googleapis.com/css?family=Kanit:400,600&display=swap",
          as: "style",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Kanit:400,600&display=swap",
        },
      ],
      googleAnalytics: {
        trackingId: "UA-XXXXXXXXX-X",
        pageViewOnLoad: true,
      },
    }),
  ],
};

module.exports = (env) => {
  switch (env) {
    case "development":
      return merge(commonConfig, developmentConfig);
    case "production":
      return merge(commonConfig, productionConfig);
    default:
      console.error("No matching configuration was found!");
  }
};
