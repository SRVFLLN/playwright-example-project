const { BasePage } = require("./base.page");
const { request } = require('@playwright/test');
const formData = require('../resources/client-server-form.json');

exports.CSFormPage = class ClientServerFormPage extends BasePage {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        super(page);
        this.firstnameValue = page.locator('#firstname-value');
        this.surnameValue = page.locator('#surname-value');
        this.ageValue = page.locator('#age-value');
        this.countryValue = page.locator('#country-value');
        this.notesValue = page.locator('#notes-value');
    }

    async sendForm() {
        const requestContext = await request.newContext();
        await requestContext.post('https://testpages.herokuapp.com/validate/input-validation', {
            form: formData
        }).then(async (response) => {
            await this.page.setContent((await response.body()).toString())
        });
    }

    async getFirstnameValue() {
        return await this.firstnameValue.innerText();
    }

    async getSurnameValue() {
        return await this.surnameValue.innerText();
    }

    async getAgeValue() {
        return await this.ageValue.innerText();
    }

    async getCountryValue() {
        return await this.countryValue.innerText();
    }

    async getNotesValue() {
        return await this.notesValue.innerText();
    }

    async getValuesInJson() {
        return {"firstname": await this.getFirstnameValue(),
            "surname": await this.getSurnameValue(),
            "age": parseInt(await this.getAgeValue()),
            "country": await this.getCountryValue(),
            "notes": await this.getNotesValue()}
    }
}