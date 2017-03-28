const env = require('../environment');
const helpers = require('./helpers');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const mergeWebpack = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;


const config = {};


if (!env.isTest) {
	config.entry = {
		'polyfills': helpers.root('src', 'client', 'polyfills.ts'),
		'vendor': helpers.root('src', 'client', 'vendor.ts'),
		'app': helpers.root('src', 'client', 'main.ts')
	}
}


config.output = env.isTest ? {} : {
	path: helpers.root('dist'),
	publicPath: env.isProd ? '/' : 'http://localhost:8080/',
	filename: env.isProd ? 'js/[name].[hash].js' : 'js/[name].js',
	chunkFilename: env.isProd ? '[id].[hash].chunk.js' : '[id].chunk.js'
}


const rules = {
	componentStyles: {
		test: /\.scss$/,
		exclude: helpers.root('src', 'client', 'shared', 'assets'),
		loader: 'raw-loader!postcss-loader!sass-loader'
	},
	sharedStyles: {
		test: /\.scss$/,
		include: helpers.root('src', 'client', 'shared', 'assets'),
		loader: env.isTest ? 'null-loader' : ExtractTextPlugin.extract({
			fallback: 'style-loader', use: ['css-loader', 'postcss-loader', 'sass-loader']
		})
	},
	typescript: {
		test: /\.ts$/,
		exclude: /node_modules/,
		loader: 'angular2-template-loader'
	},
	html: {
		test: /\.html$/,
		loader: 'raw-loader'
	}
}

config.module = {
	rules: [
		rules.componentStyles,
		rules.typescript,
		rules.html,
		rules.sharedStyles
	]
};


config.plugins = [
  /*
	new webpack.ContextReplacementPlugin(
		/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
		helpers.root('./src')
	),*/

	new webpack.ContextReplacementPlugin(
		/angular(\\|\/)core(\\|\/)@angular/,
		helpers.root('src')
	),

	new webpack.LoaderOptionsPlugin({
		options: {
			postcss: [
				autoprefixer({
					browsers: ['last 2 version']
				})
			]
		}
	})
];


if (!env.isTest && !env.isTestWatch) {
	config.plugins.push(

		new CommonsChunkPlugin({
			name: ['vendor', 'polyfills']
		}),

		new HtmlWebpackPlugin({
		  template: './src/client/index.html',
		  chunksSortMode: 'dependency'
	  }),

		new ExtractTextPlugin({ filename: 'css/[name].[hash].css', disable: !env.isProd })
	);
}


config.devServer = {
	contentBase: './src/client',
	historyApiFallback: true,
	quiet: false,
	stats: 'minimal',
	headers: {
		"Access-Control-Allow-Origin": "*"
	}
}

module.exports = mergeWebpack(commonConfig, config);
