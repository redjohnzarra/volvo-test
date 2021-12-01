const MillionMorePage = require('../pageobjects/million-more.page.js');

describe('Volvo - cookie modal popup test', () => {
    it('should detect cookie modal and click cookie settings', async () => {
        await MillionMorePage.open();
        const isCookieModalDisplayed =
            await MillionMorePage.cookieModal.waitForDisplayed();

        if (isCookieModalDisplayed) {
            await MillionMorePage.cookieSettingsClick();
        }
    });
});
