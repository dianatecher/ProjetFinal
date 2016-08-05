'use strict';

// Modules
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ENV = process.env.npm_lifecycle_event;
const isTest = ENV === 'test' || ENV === 'test-watch';
const isProd = ENV === 'build';

module.exports = (function makeWebpackConfig() {
	/**
	 * Config
	 * Reference: http://webpack.github.io/docs/configuration.html
	 * This is the object where all configuration gets set
	 */
	const config = {};

	config.entry = isTest ? {} : {
		blog: [
			'./src/public/blog.module.js',
			'./src/public/blog.controller.js',
			'./src/public/blog.config.js',
			'./src/public/views/home/home.controller.js',
			'./src/public/views/home/home.config.js'
		]
	};

	config.output = {
		path: __dirname + '/dist/public',
		publicPath: isProd ? '/' : 'http://localhost:8080/',
		filename: isProd ? '[name].[hash].js' : '[name].bundle.js',
		chunkFilename: isProd ? '[name].[hash].js' : '[name].bundle.js'
	};

	config.resolve = {
		modulesDirectories: ['./node_modules', './src/public'],
		extension: ['', '.js', '.sass']
	};

	config.module = {
		preLoaders: [],
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /\.sass$/,
				loader: isTest ? 'null' : ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader')
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
				loader: 'url?limit=10000'
			}
		]
	};
	config.postcss = [
		autoprefixer({
			browsers: ['last 2 version']
		})
	];

	config.plugins = [];

	// Skip rendering index.html in test mode
	if (!isTest) {
		// Reference: https://github.com/ampedandwired/html-webpack-plugin
		// Render index.html
		config.plugins.push(
			new HtmlWebpackPlugin({
				template: './src/public/index.html',
				filename: 'index.html',
				inject: 'body',
				chunks: ['blog']
			}),
			new HtmlWebpackPlugin({
				template: './src/public/views/home/home.html',
				filename: 'views/home.html',
				inject: 'false',
				chunks: []
			}),

			// Reference: https://github.com/webpack/extract-text-webpack-plugin
			// Extract css files
			// Disabled when in test mode or not in build mode
			new ExtractTextPlugin('[name].[hash].css', { disable: !isProd })
		);
	}

	if (isProd) {
		config.plugins.push(
			new webpack.NoErrorsPlugin(),
			new webpack.optimize.DedupePlugin(),
			new webpack.optimize.UglifyJsPlugin()
		);
	}

	return config;
})();
