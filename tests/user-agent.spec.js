const { test, expect } = require('@playwright/test');
const { MainPage } = require('../pages/main.page');
const { UserAgentPage } = require('../pages/user-agent.page');

test.describe("User agent page", () => {
    test.use({userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'});

    test('should redirect to mobile version after setting user agent', async({page}) => {
        await new MainPage(page).navigateToUserAgentPage();
        let userAgentPage = new UserAgentPage(page);
        expect(await userAgentPage.isPageOpen()).toEqual(true);
        expect(await userAgentPage.getPageHeaderText()).toContain('Mobile');
        expect(page.url()).toContain('/mobile');
    })
});