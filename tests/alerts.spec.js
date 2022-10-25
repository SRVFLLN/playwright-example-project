const { test, expect } = require('@playwright/test');
const { AlertPage } = require('../pages/alert.page');
const { MainPage } = require('../pages/main.page');
const { AlertHandler } = require('../utils/alert-handler');

test.describe("Alert page", () => {
    test.beforeEach(async ({page}) => {
        await new MainPage(page).navigateToAlertPage();
    });

    test("should open alert with expected test", async({page}) => {
        let alertPage = new AlertPage(page);
        expect(await alertPage.isPageOpen()).toEqual(true);
        AlertHandler.handleAlert(page, 'I am an alert box!');
        await alertPage.callAlert();
    });

    test("should trigger a confirm alert", async({page}) => {
        let alertPage = new AlertPage(page);
        expect(await alertPage.isPageOpen()).toEqual(true);
        AlertHandler.handleConfirm(page, 'I am a confirm alert', false);
        await alertPage.callConfirm();
        expect(await alertPage.getConfirmAnswer()).toContain('false');
        expect(await alertPage.getConfirmInfo()).toContain('You clicked Cancel');
    });

    test("should trigger a prompt", async({page}) => {
        let alertPage = new AlertPage(page);
        expect(await alertPage.isPageOpen()).toEqual(true);
        let string = (Math.random() + 1).toString(36).substring(7);
        AlertHandler.handlePrompt(page, 'I prompt you', string);
        await alertPage.callPrompt();
        expect(await alertPage.getPromptInfo()).toContain(string);
    });
});