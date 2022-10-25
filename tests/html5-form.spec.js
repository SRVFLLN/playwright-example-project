const { test, expect } = require('@playwright/test');
const { MainPage } = require('../pages/main.page');
const { HTML5FormPage } = require('../pages/html5-form.page');
const { HTML5FormResultPage } = require('../pages/html5-form-results.page');
const formData = require('../resources/html5-form.json');

test.describe("HTML5 form page", () => {
    test('should correctly handle form', async({page}) => {
        await new MainPage(page).navigateToHtml5FormPage();
        let formPage = new HTML5FormPage(page);
        expect(await formPage.isPageOpen()).toEqual(true);
        await formPage.fillForm();
        let resultPage = new HTML5FormResultPage(page);
        expect(await resultPage.isPageOpen()).toEqual(true);
        expect(await resultPage.getColourValue()).toContain(formData.colour);
        expect(await resultPage.getDateValue()).toContain(formData.date);
        expect(await resultPage.getLocalDateValue()).toContain(formData.localDate);
        expect(await resultPage.getEmailValue()).toContain(formData.email);
        expect(await resultPage.getMonthValue()).toContain(formData.month);
        expect(await resultPage.getNumberValue()).toContain(formData.number);
        expect(await resultPage.getSubmitValue()).toContain('submit')
    })
});