const { test, expect } = require('@playwright/test');
const { MainPage } = require('../pages/main.page');
const { CSFormPage } = require('../pages/client-server-form.page');
const formData = require('../resources/client-server-form.json');

test.describe("Client server form page", () => {
    test('should handle form sended by HTTP-request', async({page}) => {
        await new MainPage(page).navigateToClientServerFormPage();
        let csFormPage = new CSFormPage(page);
        expect(await csFormPage.isPageOpen()).toBe(true);
        await csFormPage.sendForm();
        expect(await csFormPage.getValuesInJson()).toEqual(formData)
    });
});