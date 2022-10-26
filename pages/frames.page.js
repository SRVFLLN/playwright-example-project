const { BasePage } = require("./base.page")

exports.FramesPage = class FramesPage extends BasePage {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        super(page, 'text=iFrames Example');
        this.listFrame = page.frameLocator('#thedynamichtml');
        this.frameListElement = this.listFrame.locator('text=iFrame List Item 40');
        this.headerFrame = page.frameLocator("#theheaderhtml");
        this.frameLink = this.headerFrame.locator('a[target="_top"]');
    }

    async getElementId() {
        return await this.frameListElement.getAttribute('id');
    }

    async clickOnLink() {
        await this.frameLink.click();
    }
}