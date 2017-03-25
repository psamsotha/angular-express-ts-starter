const helpers = require('./helpers');
const webpackConfig = require('./webpack.client');


module.exports = function (config) {

	const _config = {
		basePath: '',
		frameworks: ['jasmine'],

		files: [
			{ pattern: './config/karma.entry.js', watched: false }
		],

		preprocessors: {
			'./config/karma.entry.js': ['webpack', 'sourcemap']
		},

		webpack: webpackConfig,

		webpackMiddleware: {
			stats: 'errors-only'
		},

		webpackServer: {
			noInfo: true
		},

		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: false,
		browsers: ['Chrome'],
		singleRun: true
	};

	config.set(_config);

};