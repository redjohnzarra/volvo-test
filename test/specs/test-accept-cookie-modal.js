const MillionMorePage = require('../pageobjects/million-more.page.js');

describe('Volvo - a million more accept cookie test', () => {
    it(`should click 'Accept' when cookie modal shows up`, async () => {
        await MillionMorePage.open();
        const isCookieModalDisplayed =
            await MillionMorePage.cookieModal.waitForDisplayed();

        if (isCookieModalDisplayed) {
            await expect(MillionMorePage.cookieModalAcceptBtn).toBeClickable();
            await MillionMorePage.acceptClick();
        }
    });
});
