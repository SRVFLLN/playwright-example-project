const { BasePage } = require("./base.page");

exports.DownloadPage = class DownloadPage extends BasePage {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        super(page, 'text=Download a File via JavaScript');
        this.downloadFileButton = page.locator('#direct-download');
    }

    async startFileDownload() {
        await this.downloadFileButton.click();
    }
}