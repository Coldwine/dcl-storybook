const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              plugins: loader => [require('autoprefixer')()]
            }
          }
        ],
        include: path.resolve(__dirname, '../src/components')
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
    extensions: ['*', '.js', '.css']
  }
}
