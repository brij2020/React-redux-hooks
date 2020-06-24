const HtmlWebPackPlugin = require("html-webpack-plugin");
const path  =  require('path')
module.exports = {
    entry : ["@babel/polyfill",path.resolve('./index.js',__dirname)],
    output: {
        filename: 'main.js',
        path: __dirname + '/build/'
      },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        },
        {
         test: /\.css$/i,
         use: ['style-loader', 'css-loader'],
       }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./public/index.html",
        filename: "./index.html"
      })
    ]
  };
