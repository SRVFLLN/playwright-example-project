const { BasePage } = require("./base.page");

exports.ButtonPage = class FirstButtonPage extends BasePage {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        super(page, 'text=Disabled Dynamic Buttons');
        this.buttonSelector = '#button0';
        this.waitMessage = page.locator('#waitmessage');
        this.buttonsMessage = page.locator('#buttonmessage');
    }

    async clickOnButton(buttonIndex) {
        let button = this.page.locator(this.buttonSelector+`${buttonIndex}`)
        await button.waitFor();
        await button.click();
    }

    async isWaitMessageDisplayed() {
        await this.waitMessage.waitFor({state: 'visible'});
        return await this.waitMessage.isVisible();
    }

    async getButtonMessage() {
        return await this.buttonsMessage.innerText();
    }
}