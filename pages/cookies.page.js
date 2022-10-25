const { BasePage } = require("./base.page");

exports.CookiesPage = class CookiesPage extends BasePage {
    constructor(page) {
        super(page, 'text=Cookie Controlled Admin');
    }
}