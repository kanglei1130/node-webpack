var webpack = require('webpack');
var path = require('path');


module.exports = function(env) {
  return {
		entry: {
			main: './app/index.js',
			vendor: 'moment'
		},
		output: {
			filename: '[name].js',
			path: path.resolve(__dirname, 'dist')
		},
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        names:['vendor', 'manifest']
      })
    ],

    devServer: {
      contentBase: path.join(__dirname, "./"),
      compress: true,
      hot: true
    }
  }//end of return
}

