var path = require('path');

module.exports = {
  // entry: webpack's entry file, where webpack will start looking to build it's dependency graph
  entry: './src/index.js',
  // output: where webpack will put the 'bundle' of code it made from packaging dependencies
  output: {
    // the filename of the output file
    filename: 'bundle.js',
    // the path to the directory where the output file should go
    path: path.resolve(__dirname, 'dist')
  },
  // these are configurations for the dev server
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    port: 9000
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  // webpack only understands javascript! loaders transform files into modules for webpack
  module: {
    // this is an array of loaders
    loaders: [
      // test determines which file extensions to run the loader on
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader']}
    ]
  }
};