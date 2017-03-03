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
    watch: true,
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        names:['vendor', 'manifest']
      })
    ],

    devServer: {
      contentBase: "./",
      compress: true
    }
  }//end of return
}

