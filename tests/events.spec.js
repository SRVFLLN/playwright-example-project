const { test, expect } = require('@playwright/test');
const { MainPage } = require('../pages/main.page');
const { EventsPage } = require('../pages/events.page');

test.describe("Events page", () => {
    test.beforeEach(async ({page}) => {
       await new MainPage(page).navigateToEventsPage();
    });

    function isTriggered(text) {
        expect(text).toContain('Event Triggered');
    }

    test('should trigger blur event', async({page}) => {
        let eventsPage = new EventsPage(page);
        expect(await eventsPage.isPageOpen()).toEqual(true);
        isTriggered(await eventsPage.triggerBlur());
    });

    test('should trigger click event', async({page}) => {
        let eventsPage = new EventsPage(page);
        expect(await eventsPage.isPageOpen()).toEqual(true);
        isTriggered(await eventsPage.triggerClick());
    });

    test('should trigger contextMenu event', async({page}) => {
        let eventsPage = new EventsPage(page);
        expect(await eventsPage.isPageOpen()).toEqual(true);
        isTriggered(await eventsPage.triggerContext());
    });

    test('should trigger double click event', async({page}) => {
        let eventsPage = new EventsPage(page);
        expect(await eventsPage.isPageOpen()).toEqual(true);
        isTriggered(await eventsPage.triggerDoubleClick());
    });

    test('should trigger focus event', async({page}) => {
        let eventsPage = new EventsPage(page);
        expect(await eventsPage.isPageOpen()).toEqual(true);
        isTriggered(await eventsPage.triggerFocus());
    });

    test('should trigger key down event', async({page}) => {
        let eventsPage = new EventsPage(page);
        expect(await eventsPage.isPageOpen()).toEqual(true);
        isTriggered(await eventsPage.triggerKeyDown());
    });

    test('should trigger key up event', async({page}) => {
        let eventsPage = new EventsPage(page);
        expect(await eventsPage.isPageOpen()).toEqual(true);
        isTriggered(await eventsPage.triggerKeyUp());
    });

    test('should trigger key press event', async({page}) => {
        let eventsPage = new EventsPage(page);
        expect(await eventsPage.isPageOpen()).toEqual(true);
        isTriggered(await eventsPage.triggerKeyPress());
    });
    
    test('should trigger mouse over event', async({page}) => {
        let eventsPage = new EventsPage(page);
        expect(await eventsPage.isPageOpen()).toEqual(true);
        isTriggered(await eventsPage.triggerMouseOver());
    });

    test('should trigger mouse leave event', async({page}) => {
        let eventsPage = new EventsPage(page);
        expect(await eventsPage.isPageOpen()).toEqual(true);
        isTriggered(await eventsPage.triggerMouseLeave());
    });

    test('should trigger mouse down event', async({page}) => {
        let eventsPage = new EventsPage(page);
        expect(await eventsPage.isPageOpen()).toEqual(true);
        isTriggered(await eventsPage.triggerMouseDown());
    });
});