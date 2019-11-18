const path = require("path");

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  resolve: {
    modules: ["node_modules"],
    alias: {
      images: path.join(__dirname, "./src/shared/img"),
      components: path.join(__dirname, "./src/components"),
      dependency: path.join(__dirname, "node_modules")
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.(js|jsx)$/,
        loader: "stylelint-custom-processor-loader",
        exclude: /node_modules/
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
                outputStyle: "compressed"
              }
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        use: "file-loader"
      },
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: "file-loader"
      }
    ]
  }
};
