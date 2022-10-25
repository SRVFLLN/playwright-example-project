const { retries } = require("../playwright.config");
const { BasePage } = require("./base.page");

exports.DragNDropPage = class DragNDropPage extends BasePage {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        super(page, 'text=Drag And Drop Examples');
        this.firstDragElement = page.locator('#draggable1');
        this.secondDragElement = page.locator('#draggable2');
        this.firstDropElement = page.locator('#droppable1');
        this.secondDropElement = page.locator('#droppable2');
        this.eventText = page.locator('#keyeventslist > li')
    }

    async pressButton() {
        await this.page.keyboard.press('Enter');
        this.repeatAction()
        let iterator = 5
        while(iterator > 0) {
            await this.repeatAction(await this._isEventNotPerformed(), async () =>{await this.page.keyboard.press('Enter')});
            iterator--;
        }
    }
    
    async _isEventNotPerformed() {
        return !(await this.eventText.isVisible())
    }

    async dragFirstElement() {
        await this.firstDragElement.dragTo(this.firstDropElement);
    }

    async dragSecondElement() {
        await this.secondDragElement.dragTo(this.secondDropElement);
    }

    async getFirstDropElementText() {
        return await this.firstDropElement.innerText();
    }

    async getSecondDropElementText() {
        return await this.secondDropElement.innerText();
    }

    async getEventText() {
        return await this.eventText.innerText();
    }
}