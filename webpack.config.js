module.exports = {
    entry: './path/to/my/entry/file.js',
    devtool: 'source-map',
    mode: 'development',
    entry: './src/front/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js',
      },
      module: {
        rules: [{ test: /\.tsx$/, use: 'ts-loader' }],
        exclude: /node_modules/,
      },
  };

