const path = require('path')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const config = {
  devtool: false,
  context: path.resolve(__dirname, 'src'),
  entry: {
    content: './content/index.js',
    popup: './popup/index.js',
    background: './background/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.svg']
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: path.resolve(__dirname, 'tsconfig.json')
      }
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: '*',
          to: '.'
        }
      ]
    })
  ],
  optimization: {
    concatenateModules: true,
    minimize: true,
    minimizer: [new TerserPlugin()]
  }
}

module.exports = (env, argv) => {
  // Default to production
  if (argv.mode === 'development') {
    config.devtool = 'inline-source-map'
    config.optimization.minimize = false
    config.optimization.minimizer = []
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(argv.mode)
      })
    )
  }

  return config
}
