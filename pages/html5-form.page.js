const { BasePage } = require("./base.page");
const formData = require('../resources/html5-form.json');

exports.HTML5FormPage = class HTML5FormPage extends BasePage {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        super(page, 'text=HTML5 Form Elements Examples');
        this.colourInput = page.locator('#colour-picker');
        this.dateInput = page.locator('#date-picker');
        this.localDateInput = page.locator('#date-time-picker');
        this.emailInput = page.locator('#email-field');
        this.monthInput = page.locator('#month-field');
        this.numberInput = page.locator('#number-field');
        this.submitButton = page.locator('[type="submit"]');
    }

    async fillForm() {
        await this.colourInput.fill(formData.colour);
        await this.dateInput.fill(formData.date);
        await this.localDateInput.fill(formData.localDate);
        await this.emailInput.fill(formData.email);
        await this.monthInput.fill(formData.month);
        await this.numberInput.fill(formData.number);
        await this.submitButton.click();
    }
}