const { test, expect } = require('@playwright/test');
const { MainPage } = require('../pages/main.page');
const { XHTTPMessagesPage } = require('../pages/xhttp-messages.page');

test.describe("XHTTP messages page", () => {
    test('should make expected requests to /messageset', async({page}) => {
        const [request] = await Promise.all([ 
            page.waitForRequest(request => request.url().includes('/messageset')),
            new MainPage(page).navigateToXHTTPMessagesPage()
        ]);
        expect(await new XHTTPMessagesPage(page).isPageOpen()).toBe(true);
        expect(request.method()).toEqual('GET');
        expect(request.resourceType()).toEqual('xhr');
    });

    test('should return expected response from /messageset', async({page}) => {
        const [response] = await Promise.all([ 
            page.waitForResponse(response => response.url().includes('/messageset')),
            new MainPage(page).navigateToXHTTPMessagesPage()
        ]);
        expect(await new XHTTPMessagesPage(page).isPageOpen()).toBe(true);
        expect(response.headers()).toHaveProperty('content-type', 'application/json');
        expect(response.status()).toEqual(200);
        expect(await response.text()).toContain('"message"');
    });
});