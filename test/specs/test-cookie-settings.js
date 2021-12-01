const MillionMorePage = require('../pageobjects/million-more.page.js');

describe('Cookie settings test', () => {
    it('should see 7 list items', async () => {
        const listItems = MillionMorePage.cookieModalSettingsListItems;
        await expect(listItems).toBeElementsArrayOfSize(7);
    });

    it(`should have 'Your Privacy' item as default selected`, async () => {
        const yourPrivacyItem =
            MillionMorePage.cookieModalSettingsListItemYourPrivacy;
        await expect(yourPrivacyItem).toHaveElementClassContaining(
            'menu-item-selected'
        );
    });

    const youPrivacyBodyTextCheck =
        'If you delete all your cookies you will have to update your preferences with us again';
    it(`should have '${youPrivacyBodyTextCheck}' text in body section`, async () => {
        const bodySection = MillionMorePage.cookieModalSettingsBodySection;
        await expect(bodySection).toBeDisplayed();
        await expect(bodySection).toHaveTextContaining(youPrivacyBodyTextCheck);
    });

    const strictlyNecessaryCookiesText = 'Strictly Necessary Cookies';
    it(`should switch to '${strictlyNecessaryCookiesText}' item when clicked`, async () => {
        await MillionMorePage.switchToNecessaryCookieSetting();
        const necessaryItem =
            MillionMorePage.cookieModalSettingsListItemStrictlyNecessaryCookies;
        await expect(necessaryItem).toHaveElementClassContaining(
            'menu-item-selected'
        );
        const bodySection = MillionMorePage.cookieModalSettingsBodySection;
        await expect(bodySection).toHaveTextContaining(
            strictlyNecessaryCookiesText
        );
    });

    const targetAdvertisingCookiesText = 'Targeting and Advertising Cookies';
    it(`should switch to '${targetAdvertisingCookiesText}' item when clicked`, async () => {
        await MillionMorePage.switchToTargetAdvertisingCookieSetting();
        const targetAdvertisingItem =
            MillionMorePage.cookieModalSettingsListItemTargetAdvertisingCookies;
        await expect(targetAdvertisingItem).toHaveElementClassContaining(
            'menu-item-selected'
        );
        const bodySection = MillionMorePage.cookieModalSettingsBodySection;
        await expect(bodySection).toHaveTextContaining(
            targetAdvertisingCookiesText
        );
    });

    it(`should set '${targetAdvertisingCookiesText}' to Active`, async () => {
        await MillionMorePage.toggleSwitchButtonCookieSetting();
        const switchLabel =
            MillionMorePage.cookieModalSettingsBodySectionSwitchLabel;
        await expect(switchLabel).toHaveTextContaining('Active');
    });

    it(`should click 'Save settings' button in cookies modal and close the modal`, async () => {
        await MillionMorePage.cookiesModalSaveSettingsClick();
        await MillionMorePage.cookieModal.waitForDisplayed({
            reverse: true,
        });
    });
});
