const helpers = require('./helpers');
const env = require('../environment');


const config = {};


if (env.isProd) {
	config.devtool = 'source-map';
}
else if (env.isTest) {
	config.devtool = 'inline-source-map';
}
else {
	config.devtool = 'eval-source-map';
}


config.resolve = {
	extensions: ['.js', '.ts'],
	mainFields: ['module', 'browser', 'main'],
	modules: [
		helpers.root('src'),
		helpers.root('node_modules')
	]
};


config.module = {
	rules: [
		{
			test: /\.ts$/,
			exclude: [/node_modules/],
			loader: 'awesome-typescript-loader'
		}
	]
};


config.plugins = [];


module.exports = config;