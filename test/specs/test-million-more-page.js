const MillionMorePage = require('../pageobjects/million-more.page.js');

describe('Volvo - a million more page test', () => {
    it('should have the correct title', async () => {
        await expect(browser).toHaveTitle(
            'A million more | Volvo Cars - International'
        );

        await browser.saveAndDiffScreenshot('A million more');
    });

    it('should have the correct h2 header in body', async () => {
        await expect(MillionMorePage.modelIntroH2).toHaveText(
            'Ideas that change the world are often the most controversial.'
        );
    });

    it('should have 4 items in safety features section', async () => {
        const listItems = MillionMorePage.safetyFeaturesSectionItems;
        await expect(listItems).toBeElementsArrayOfSize(4);
    });

    it('should have 4 items in video testimonials section', async () => {
        const listItems = MillionMorePage.videoTestimonialItems;
        await expect(listItems).toBeElementsArrayOfSize(4);
    });

    it('should have 8 items in model carousel section', async () => {
        const listItems = MillionMorePage.modelCarouselItems;
        await expect(listItems).toBeElementsArrayOfSize(8);
    });

    it('should have footer section and have 4 clickable items', async () => {
        const footer = MillionMorePage.siteFooterSectionContainer;
        await expect(footer).toBeDisplayed();
        const footerLinks = MillionMorePage.siteFooterClickableItems;
        await expect(footerLinks).toBeElementsArrayOfSize(4);
    });
});
