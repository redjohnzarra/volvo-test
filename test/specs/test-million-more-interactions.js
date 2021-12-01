const MillionMorePage = require('../pageobjects/million-more.page.js');

describe('Volvo - a million more interactions test', () => {
    const mainTextIndicator =
        'Ideas that change the world are often the most controversial.';
    it(`should have 'WATCH THE STORY' button and play video after clicking`, async () => {
        await expect(MillionMorePage.watchStoryVideoBtn).toBeDisplayed();
        await expect(MillionMorePage.watchStoryVideoBtn).toBeClickable();
        await MillionMorePage.watchTheStoryClick();
        await expect(MillionMorePage.videoIframeStory).toBeDisplayed();
    });

    it(`should have 'LEARN MORE ABOUT CAR SAFETY' button and go to car safety page and back`, async () => {
        await expect(MillionMorePage.learnMoreCarSafetyBtn).toBeDisplayed();
        await expect(MillionMorePage.learnMoreCarSafetyBtn).toBeClickable();
        await browser.saveAndDiffScreenshot('Car safety section');
        await MillionMorePage.clickLearnMoreAboutCarSafetyBtn();
        await expect(MillionMorePage.modelIntroH2).toHaveText('Car safety');
        await browser.saveAndDiffScreenshot('Car safety page');
        await browser.back();
        await expect(MillionMorePage.modelIntroH2).toHaveText(
            mainTextIndicator
        );
    });

    it(`should click the learn more button for 'Decades of innovation' section`, async () => {
        await expect(
            MillionMorePage.learnMoreDecadesOfInnovationBtn
        ).toBeDisplayed();
        await expect(
            MillionMorePage.learnMoreDecadesOfInnovationBtn
        ).toBeClickable();
        await browser.saveAndDiffScreenshot('Decades of innovation section');
        await MillionMorePage.clickLearnMoreAboutDecadesOfInnovationBtn();
        await expect(MillionMorePage.modelIntroH2).toHaveText(
            'A heritage of safety innovations'
        );
        await browser.saveAndDiffScreenshot(
            'Heritage of safety innovations page'
        );
        await browser.back();
        await expect(MillionMorePage.modelIntroH2).toHaveText(
            mainTextIndicator
        );
    });

    it(`should verify mild car hybrids link, carousel section, and click first model in carousel`, async () => {
        const mildHybridCarsLink = MillionMorePage.mildHyBridCarsLink;
        await expect(mildHybridCarsLink).toBeDisplayed();
        await expect(mildHybridCarsLink).toBeClickable();
        const firstCarModel = MillionMorePage.firstCarModelTitle;
        await expect(firstCarModel).toBeDisplayed();
        await expect(firstCarModel).toBeClickable();
        await browser.saveAndDiffScreenshot('Models');
        await MillionMorePage.clickFirstCarModel();
        await browser.saveAndDiffScreenshot('First car model');
        await browser.back();
        await expect(MillionMorePage.modelIntroH2).toHaveText(
            mainTextIndicator
        );
    });

    it(`should click detect and click the 'Social Media' link in the footer section`, async () => {
        await expect(MillionMorePage.socialMediaBtnFooter).toBeDisplayed();
        await expect(MillionMorePage.socialMediaBtnFooter).toBeClickable();
        await browser.saveAndDiffScreenshot('Footer links');
        await MillionMorePage.clickSocialMediaBtn();
        await expect(browser).toHaveTitleContaining('Social Media');
        await browser.saveAndDiffScreenshot('Social Media page');
        await browser.back();
        await expect(MillionMorePage.modelIntroH2).toHaveText(
            mainTextIndicator
        );
    });
});
