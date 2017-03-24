const mergeWebpack = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const commonConfig = require('./webpack.common');
const webpack = require('webpack');
const env = require('./environment');


const config = {};


config.target = 'node';


config.externals = [nodeExternals()];


if (!env.isTest) {
	config.entry = helpers.root('src/backend/server.ts');
}


config.output = env.isTest ? {} : {
	filname: 'server.js',
	path: helpers.root('dist')
}


config.plugins = [
	new webpack.BannerPlugin({
		banner: 'require("source-map-support").install();', raw: true, entryOnly: false
	})
];


module.exports = mergeWebpack(commonConfig, config);
