var webpack = require("webpack");
var path = require("path");
var HtmlPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: "./app/app.js",
	output: {
		path: path.join(__dirname, "build"),
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.json$/, loader: "json-loader" },
			{ test: /\.jade$/, loader: "jade-loader" },
			{ test: /\.css$/,  loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap") },
			{ test: /\.less$/,  loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!less-loader?sourceMap") },
			{ test: /\.png$/,  loader: "url-loader?limit=5000&minetype=image/png" }
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		}),
		new HtmlPlugin({
			title: "source-map-visualization"
		}),
		new ExtractTextPlugin("[name].css", { allChunks: true })
	],
	amd: {
		jQuery: true
	},
    cache: true,
    devtool: "source-map"
};