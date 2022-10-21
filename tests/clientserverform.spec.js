const { test, expect } = require('@playwright/test');
const {MainPage} = require('../pages/main.page');
const {CSFormPage} = require('../pages/client-server-form.page');
const formData = require('../resources/client-server-form.json');

test.describe("Client server form page", () => {
    test.beforeEach(async ({page}) => {
       new MainPage(page).navigateToClientServerFormPage();
    });

    test('should contains button which be enabled and clickable', async({page}) => {
        let csFormPage = new CSFormPage(page);
        expect(await csFormPage.isPageOpen()).toBe(true);
        await csFormPage.sendForm();

        expect(await csFormPage.getValuesInJson()).toEqual(formData)
    });
});