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
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    devServer: {
      contentBase: "./",
      compress: true
    }, 

    module: {
      rules: [
        {
          test: /\.js$/,
          use: [{ 
            loader: 'babel-loader', 
            options: {presets: ['react', 'es2015']}
          }],
          exclude: /node_modules/
        },
      ],
    }
  }//end of return
}

