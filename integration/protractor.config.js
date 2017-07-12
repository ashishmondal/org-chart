exports.config = {
	allScriptsTimeout: 11000,
	specs: [
		'./e2e/**/*.e2e-spec.js'
	],
	capabilities: {
		'browserName': 'chrome'
	},
	directConnect: true,
	getPageTimeout: 20000,
	baseUrl: 'http://localhost:8080/',
	framework: 'jasmine2'
};
