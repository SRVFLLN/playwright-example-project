const { BasePage } = require("./base.page");

exports.XHTTPMessagesPage = class XHTTPMessagesPage extends BasePage {
    constructor(page) {
        super(page, 'text=XHTTP Messages');
    }
}