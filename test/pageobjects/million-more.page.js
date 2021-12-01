const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MillionMorePage extends Page {
    /**
     * define selectors using getter methods
     */
    get cookieModal() {
        return $('.optanon-alert-box-bg');
    }

    get cookieModalAcceptBtn() {
        return $('button.accept-cookies-button');
    }

    get cookieModalCookieSettingsBtn() {
        return $('button.cookie-settings-button');
    }

    get cookieModalSettingsListItems() {
        return $$(`ul#optanon-menu > li[class*='menu-item']`);
    }

    get cookieModalSettingsListItemYourPrivacy() {
        return $(`ul#optanon-menu > li.menu-item-about`);
    }

    get cookieModalSettingsBodySection() {
        return $('div#optanon-popup-body-right');
    }

    get cookieModalSettingsListItemStrictlyNecessaryCookies() {
        return $('ul#optanon-menu > li.menu-item-necessary');
    }

    get cookieModalSettingsListItemTargetAdvertisingCookies() {
        return $('ul#optanon-menu > li.menu-item-advertising');
    }

    get cookieModalSettingsBodySectionSwitchLabel() {
        return $(`div#optanon-popup-body-right form label[for='chk148066']`);
    }

    get cookiModalSettingsSaveSettingsBtn() {
        return $(`button[title='Save settings']`);
    }

    get modelIntroH2() {
        return $(`section[data-autoid='ModelIntro'] > h2`);
    }

    get safetyFeaturesSectionItems() {
        return $$(
            `div[data-component='IconCallouts'] div[data-autoid='iconCallouts:iconTextItem']`
        );
    }

    get videoTestimonialItems() {
        return $$(
            `div[data-component='VideoTestimonials'] div[data-autoid='videoTestimonials:container']`
        );
    }

    get modelCarouselItems() {
        return $$(
            `div[data-component='ProductListCarousel'] div[data-autoid='springCarouselPane:carouselItem']`
        );
    }

    get siteFooterSectionContainer() {
        return $(`footer[data-autoid='footer:container']`);
    }

    get siteFooterClickableItems() {
        return $$(
            `div[class*='_SiteFooter-'] span[role='list'] > span[role='listitem']`
        );
    }

    get watchStoryVideoBtn() {
        return $(`div[data-component='Video'] button.ac.ae.ag`);
    }

    get videoIframeStory() {
        return $(`div[data-component='Video'] iframe`);
    }

    get learnMoreCarSafetyBtn() {
        return $(`a[data-autoid='iconCallouts:cta']`);
    }

    get learnMoreDecadesOfInnovationBtn() {
        return $(`a[data-autoid='imageWithText:primaryCta']`);
    }

    get mildHyBridCarsLink() {
        return $(`a[data-autoid='ProductListCarousel:cta2']`);
    }

    get firstCarModelTitle() {
        return $(`span[data-autoid='productListCarouselItem:modelName']`);
    }

    get socialMediaBtnFooter() {
        return $(`a[data-track-onclick*='Social Media']`);
    }

    /**
     * Method for clicking the `ACCEPT` button in cookie modal
     */
    async acceptClick() {
        await this.cookieModalAcceptBtn.click();
    }

    /**
     * Method for clikcing the `COOKIE SETTINGS` button in cookie modal
     */
    async cookieSettingsClick() {
        await this.cookieModalCookieSettingsBtn.click();
    }

    /**
     * Method for switching to `Strictly Necessary Cookies` list item (as active/selected)
     */
    async switchToNecessaryCookieSetting() {
        await this.cookieModalSettingsListItemStrictlyNecessaryCookies.click();
    }

    /**
     * Method for switching to `Target and Advertising cookies` list item (as active/selected)
     */
    async switchToTargetAdvertisingCookieSetting() {
        await this.cookieModalSettingsListItemTargetAdvertisingCookies.click();
    }

    /**
     * Method for toggling the switch button in body section
     */
    async toggleSwitchButtonCookieSetting() {
        await this.cookieModalSettingsBodySectionSwitchLabel.click();
    }

    /**
     * Method for clicking the `Save settings` button in cookies modal
     */
    async cookiesModalSaveSettingsClick() {
        await this.cookiModalSettingsSaveSettingsBtn.click();
    }

    /**
     * Method for clicking the `WATCH THE STORY` button
     */
    async watchTheStoryClick() {
        await this.watchStoryVideoBtn.click();
    }

    /**
     * Method for clicking the `LEARN MORE ABOUT CAR SAFETY` button
     */
    async clickLearnMoreAboutCarSafetyBtn() {
        await this.learnMoreCarSafetyBtn.click();
    }

    /**
     * Method for clicking the `LEARN MORE` button for Decades of innovation section
     */
    async clickLearnMoreAboutDecadesOfInnovationBtn() {
        await this.learnMoreDecadesOfInnovationBtn.click();
    }

    /**
     * Method for clicking the first car model
     */
    async clickFirstCarModel() {
        await this.firstCarModelTitle.click();
    }

    /**
     * Method for clicking the `Social Media` button in footer
     */
    async clickSocialMediaBtn() {
        await this.socialMediaBtnFooter.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('intl/v/car-safety/a-million-more');
    }
}

module.exports = new MillionMorePage();
