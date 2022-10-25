const { test, expect } = require('@playwright/test');
const { MainPage } = require('../pages/main.page');
const { FramesPage } = require('../pages/frames.page')

test.describe("Frames page", () => {
    test.beforeEach(async ({page}) => {
       await new MainPage(page).navigateToFramesPage();
    });

    test('should contain element inside iFrame', async({page}) => {
        let framesPage = new FramesPage(page);
        expect(await framesPage.isPageOpen()).toEqual(true);
        expect(await framesPage.getElementId()).toContain('iframe40');
    })

    test('should go to main page by link inside iFrame', async({page}) => {
        let framesPage = new FramesPage(page);
        expect(await framesPage.isPageOpen()).toEqual(true);
        await framesPage.clickOnLink();
        expect(await new MainPage(page).isPageOpen()).toEqual(true);
    })
});