const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const outputDirectory = "dist";
  module.exports = {
    mode:'development',
    entry: './src/index.js',
    plugins: [
      new CleanWebpackPlugin([outputDirectory]),
      new HtmlWebpackPlugin({
       title: 'Caching',
       template: "./public/index.html",
       favicon: "./public/favicon.ico"
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        port: 3001,
        open: true,
        hot: true,
        proxy: { // proxy URLs to backend development server
          '/api': 'http://localhost:8080'
        },
        compress: true,
        https: true,
    },
    devtool: 'eval',
    output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, outputDirectory)
    },
    module: {
         rules: [
             {
				loader: 'babel-loader',
				options: {
					presets: ['env', 'react', 'es2015']
				},
				test: /\.js?$/,
				exclude: /node_modules/,
			},
            {
                test: /\.html$/,
                use: [
                  // apply multiple loaders and options
                  "htmllint-loader",
                  {
                    loader: "html-loader",
                    options: {
                    }
                  }
                ]
            },
            {
             test: /\.css$/,
             use: [
               'style-loader',
               'css-loader'
             ]
           },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                 'file-loader'
                ]
            },
            {
                 test: /\.(woff|woff2|eot|ttf|otf)$/,
                 use: [
                   'file-loader'
                 ]
            },
           {
             test: /\.(csv|tsv)$/,
             use: [
               'csv-loader'
             ]
           },
           {
             test: /\.xml$/,
             use: [
               'xml-loader'
             ]
           }
             
         ]
       },
    resolve:{
        modules:[
            "node_modules",
            path.resolve(__dirname,"src")
        ],
        aliasFields: ['browser'],
        descriptionFiles: ['package.json'],
        extensions:[".js",".json",".jsx",".css"],
        unsafeCache: true,
        unsafeCache: {},
        cachePredicate: (path, request) => true,
        
    },
      context: __dirname,
      target:"web",
    
  };