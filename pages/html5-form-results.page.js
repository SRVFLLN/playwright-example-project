const { BasePage } = require("./base.page");

exports.HTML5FormResultPage = class HTML5FormResultPage extends BasePage {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        super(page, 'text=Processed Form Details');
        this.colorValue = page.locator('#_valuecolour');
        this.dateValue = page.locator('#_valuedate');
        this.localDateValue = page.locator('#_valuedatetime');
        this.emailValue = page.locator('#_valueemail');
        this.monthValue = page.locator('#_valuemonth');
        this.numberValue = page.locator('#_valuenumber');
        this.submitVaue = page.locator('#_valuesubmitbutton');
    }

    async getColourValue() {
        return await this.colorValue.innerText();
    }

    async getDateValue() {
        return await this.dateValue.innerText();
    }

    async getLocalDateValue() {
        return await this.localDateValue.innerText();
    }
    
    async getEmailValue() {
        return await this.emailValue.innerText();
    }

    async getMonthValue() {
        return await this.monthValue.innerText();
    }

    async getNumberValue() {
        return await this.numberValue.innerText();
    }

    async getSubmitValue() {
        return await this.submitVaue.innerText();
    }
}