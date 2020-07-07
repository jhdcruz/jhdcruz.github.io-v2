const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
    chunkFilename: '[name].[id].chunk.js',
  },
  resolve: {
    modules: ['node_modules'],
    alias: {
      images: path.join(__dirname, './src/shared/img'),
      components: path.join(__dirname, './src/components'),
      layouts: path.join(__dirname, './src/layouts'),
      dependency: path.join(__dirname, 'node_modules'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['stylelint-custom-processor-loader', 'babel-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                fibers: false,
                outputStyle: 'compressed',
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        use: 'file-loader',
      },
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: 'file-loader',
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
