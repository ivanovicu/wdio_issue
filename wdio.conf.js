export const config = {
    specs: ['./test.js'],

    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--disable-gpu', '--no-sandbox']
        }
    }],

    logLevel: 'error',
    baseUrl: 'https://www.google.com',
    waitforTimeout: 40000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    framework: 'mocha',
    reporters: ['spec'],

    mochaOpts: {
        timeout: 60000
    },
    before: async function (capabilities, specs) {
        await browser.addCommand(`waitForNotExist`, async function(options = {}) {
			await this.waitForExist({ ...options, ...{ reverse : true }});
		}, true);

		await browser.addCommand(`waitForNotDisplayed`, async function(options) {
			await this.waitForDisplayed({ ...options, ...{ reverse : true }});
		}, true);
    }
};

afterTest : async (test, context, { error, passed }) => {
		if(!passed) {
				await browser.debug();
		}
	}
