const { BasePage } = require('./base.page');

exports.UploadPage = class UploadPage extends BasePage {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        super(page, 'text=Upload a File');
        this.fileInput = page.locator('#fileinput');
        this.sendFileButton = page.locator('[type="submit"]');
        this.fileName = page.locator('#uploadedfilename');
    }

    async sendFile(name) {
        await this.fileInput.setInputFiles({
            name: name,
            mimeType: 'text/plain',
            buffer: Buffer.from('text content')
        });
        await this.sendFileButton.click();
    }

    async getSendedFileName() {
        return await this.fileName.innerText();
    }
}