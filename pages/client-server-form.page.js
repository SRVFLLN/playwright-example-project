const { BasePage } = require("./base.page");
const { request } = require('@playwright/test');
const formData = require('../resources/client-server-form.json');

exports.CSFormPage = class ClientServerFormPage extends BasePage {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        super(page, 'text=Input Validation Examples');
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
    
    async getValuesInJson() {
        return {"firstname": await this.firstnameValue.innerText(),
            "surname": await this.surnameValue.innerText(),
            "age": parseInt(await this.ageValue.innerText()),
            "country": await this.countryValue.innerText(),
            "notes": await this.notesValue.innerText()}
    }
}