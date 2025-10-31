describe(`Element still displayed`, () => {
	before(async () => {
		await browser.url(`https://webdriver.io/`);
	});

	it(`Step 1:`, async () => {
		// Click for modal
		await $(`[alt="WebdriverIO AI Copilot"]`).click();

		// Wait for modal
		await $(`.main-module_ms-main-bot__QKkRf`).waitForDisplayed();

		// Close modal
		await browser.keys(`Escape`);

		// Element displayed ??
		await $(`.main-module_ms-main-bot__QKkRf`).waitForNotDisplayed();

        // Not exist works as expected
        // await $(`.main-module_ms-main-bot__QKkRf`).waitForNotExist();
	});
});
