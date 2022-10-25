const { test, expect } = require('@playwright/test');
const { MainPage } = require('../pages/main.page');
const { HoverPage } = require('../pages/hover.page');

test.describe("Hover page", () => {
    test.beforeEach(async ({page}) => {
       await new MainPage(page).navigateToHoverPage();
    });

    test('should trigger text to be displayed', async({page}) => {
        let hoverPage = new HoverPage(page);
        expect(await hoverPage.isPageOpen()).toEqual(true);
        await hoverPage.hoverOnPagraph();
        expect(await hoverPage.isTextShown()).toBe(true);
    })

    test('should trigger div with link to be displayed', async({page}) => {
        let hoverPage = new HoverPage(page);
        expect(await hoverPage.isPageOpen()).toEqual(true);
        await hoverPage.hoverOnDiv();
        await hoverPage.clickOnLinkUnderHover();
        expect(await hoverPage.getPageHeaderText()).toContain('Action Complete');
    })
});