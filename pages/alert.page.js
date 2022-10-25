const { BasePage } = require('./base.page');

exports.AlertPage = class AlertPage extends BasePage{
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        super(page, 'text=Alert Box Examples');
        this.pageHeader = page.locator("h1");
        this.callAlertButton = page.locator("#alertexamples");
        this.callConfirmButton = page.locator("#confirmexample");
        this.confirmAnswer = page.locator("#confirmreturn");
        this.confirmInfo = page.locator("#confirmexplanation");
        this.callPromptButton = page.locator("#promptexample");
        this.promptInfo = page.locator("#promptexplanation");
    }

    async callAlert() {
        await this.callAlertButton.click();
    }

    async callConfirm() {
        await this.callConfirmButton.click();
    }

    async getConfirmAnswer() {
        return await this.confirmAnswer.textContent();
    }

    async getConfirmInfo() {
        return await this.confirmInfo.textContent();
    }

    async callPrompt() {
        await this.callPromptButton.click();
    }

    async getPromptInfo() {
        return await this.promptInfo.textContent();
    }
}