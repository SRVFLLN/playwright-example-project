const { test, expect } = require('@playwright/test');
const {MainPage} = require('../pages/main.page');
const {FakeAlertsPage} = require('../pages/fake-alerts.page');

test.describe("Fake alerts page", () => {
    test.beforeEach(async ({page}) => {
       let mainPage = new MainPage(page);
       mainPage.navigateToFakeAlertsPage();
    });

    test("should open fake alert", async({page}) => {
        let fakeAlertPage = new FakeAlertsPage(page);
        expect(await fakeAlertPage.isPageOpen()).toEqual(true);
        
        await fakeAlertPage.callFakeAlert();
        expect(await fakeAlertPage.getDialogHeader()).toContain('I am a fake alert box!');
        await fakeAlertPage.confirmDialog();
        expect(await fakeAlertPage.isDialogBackDisplayed()).toBe(false);
    })

    test("should open modal dialog", async({page}) => {
        let fakeAlertPage = new FakeAlertsPage(page);
        expect(await fakeAlertPage.isPageOpen()).toEqual(true);

        await fakeAlertPage.callModalDialog();
        expect(await fakeAlertPage.getDialogHeader()).toContain('I am a modal div!');
        await fakeAlertPage.clickOnDialogBack();
        expect(await fakeAlertPage.isDialogBackDisplayed()).toBe(false);
    })
});