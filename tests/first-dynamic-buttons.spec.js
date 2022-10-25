const { test, expect } = require('@playwright/test');
const { MainPage } = require('../pages/main.page');
const { ButtonPage } = require('../pages/first-dynamic-buttons.page');

test.describe("First dynamic buttons page", () => {
    test('should contains button which appears and be clickable', async({page}) => {
        await new MainPage(page).navigateToFirstButtonsPage();
        let buttonPage = new ButtonPage(page);
        expect(await buttonPage.isPageOpen()).toEqual(true);
        let limit = parseInt((await buttonPage.getButtonMessage()).replace( /^\D+/g, ''));
        for(let i = 0; i < limit; i++) {
            await buttonPage.clickOnButton(i);
            if (i!=0 & i!=3) expect(await buttonPage.isWaitMessageDisplayed()).toBe(true);
        }
        expect(await buttonPage.getButtonMessage()).toContain('All Buttons Clicked');
    })
});