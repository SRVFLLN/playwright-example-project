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
        await this.repeatAction(await this._isFrameElementVisible(), async () => {await this.reload()})
        return await this.frameListElement.getAttribute('id');
    }

    async clickOnLink() {
        await this.repeatAction(await this._isFrameElementVisible(), async () => {await this.reload()})
        await this.frameLink.click();
    }

    async _isFrameElementVisible() {
        return !(await this.frameListElement.isVisible({timeout:1000}))
    }
}