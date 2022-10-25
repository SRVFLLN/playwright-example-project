const { test, expect } = require('@playwright/test');
const { MainPage } = require('../pages/main.page');
const { CookiesPage } = require('../pages/cookies.page');

test.describe("Cookies page", () => {
    test('should set cookie', async({page}) => {
        await new MainPage(page).navigateToCookiePage();
        let cookiesPage = new CookiesPage(page);
        expect(await cookiesPage.isPageOpen()).toEqual(true);
        expect((await page.context().cookies(page.url())).length).toBe(0);
        await page.context().addCookies([{url: `${page.url()}`, name: 'loggedin', value: 'Admin'}]);
        await cookiesPage.reload();
        expect((await page.context().cookies(page.url()))[0]).toHaveProperty('name', 'loggedin');
        expect(await cookiesPage.getPageHeaderText()).toContain('Admin View');
    });
});