const { test, expect } = require('@playwright/test');
const { MainPage } = require('../pages/main.page');
const { DragNDropPage } = require('../pages/drag-n-drop.page');

test.describe("Drag and drop page", () => {
    test('should drag and drop elments to other', async({page}) => {
        await new MainPage(page).navigateToDragNDropPage();
        let dragNDropPage = new DragNDropPage(page);
        expect(await dragNDropPage.isPageOpen()).toBe(true);
        expect(await dragNDropPage.getFirstDropElementText()).toEqual('Drop here');
        expect(await dragNDropPage.getSecondDropElementText()).toEqual('No Drop here');
        await dragNDropPage.pressButton();
        expect(await dragNDropPage.eventText()).toEqual('down 13');
        expect(await dragNDropPage.getFirstDropElementText()).toEqual('Drop Here');
        expect(await dragNDropPage.getSecondDropElementText()).toEqual('Drop Here');
        await dragNDropPage.dragFirstElement();
        await dragNDropPage.dragSecondElement();
        expect(await dragNDropPage.getFirstDropElementText()).toEqual('Dropped!');
        expect(await dragNDropPage.getSecondDropElementText()).toEqual('Dropped!');
    })
});