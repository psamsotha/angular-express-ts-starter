
const ENV = process.env.npm_lifecycle_event;


module.exports = {
	isTest: ENV.indexOf('test') !== -1,
	isProd: ENV.indexOf('build') !== -1
};
