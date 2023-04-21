const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  // plugins: [
  //   new MiniCssExtractPlugin({
  //     filename: 'styles.css',
  //     chunkFilename: '[id].css',
  //     ignoreOrder: true,
  //   }),
  // ],

  entry: {
    index: './src/index.tsx',
  },

  // mode: 'production',
  // devtool: 'source-map',

  mode: 'development',
  devtool: 'inline-source-map',

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // {
      //   test: /\.css$/,
      //   use: [MiniCssExtractPlugin.loader, 'css-loader'],
      //   // use: ["style-loader", "css-loader"]
      // },
      {
        test: /\.(png|jpg)$/,
        type: 'asset/resource',
      },
    ],
  },
  // optimization: {
  //   minimize: true,
  //   minimizer: [
  //     new CssMinimizerPlugin({
  //       parallel: true,
  //       minimizerOptions: {
  //         preset: [
  //           'default',
  //           {
  //             discardComments: { removeAll: true },
  //           },
  //         ],
  //       },
  //     }),
  //   ],
  // },

  watch: true,
  resolve: {
    extensions: ['.tsx', '.js', '.ts'],
  },
};
