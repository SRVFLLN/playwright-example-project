const { test, expect } = require('@playwright/test');
const { MainPage } = require('../pages/main.page');
const { ButtonPage } = require('../pages/second-dynamic-buttons.page');

test.describe("Second dynamic buttons page", () => {
    test('should contains button which be enabled and clickable', async({page}) => {
        await new MainPage(page).navigateToSecondButtonsPage();
        let buttonPage = new ButtonPage(page);
        expect(await buttonPage.isPageOpen()).toEqual(true);
        for(let i = 0; i < 4; i++) {
            await buttonPage.clickOnButton(i);
            if (i!=0 & i!=3) expect(await buttonPage.isWaitMessageDisplayed()).toBe(true);
        }
        expect(await buttonPage.getButtonMessage()).toContain('All Buttons Clicked');
    })
});