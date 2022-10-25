const { BasePage } = require("./base.page");

exports.UserAgentPage = class UserAgentPage extends BasePage {
    constructor(page) {
        super(page, 'text=User Agent Based Mobile Redirection Page');
    }
}