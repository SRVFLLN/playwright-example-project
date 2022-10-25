const { test, expect } = require('@playwright/test');
const { MainPage } = require('../pages/main.page');
const { UploadPage } = require('../pages/upload.page');

test.describe("Upload page", () => {
    test('should upload correct file', async({page}) => {
        await new MainPage(page).navigateToUploadPage();
        let uploadPage = new UploadPage(page);
        expect(await uploadPage.isPageOpen()).toEqual(true);
        let name = ((Math.random() + 1).toString(36).substring(7)) + '.txt';
        await uploadPage.sendFile(name);
        expect(await uploadPage.getSendedFileName()).toContain(name);
    })
});