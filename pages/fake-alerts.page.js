const { BasePage } = require("./base.page");

exports.FakeAlertsPage = class FakeAlertsPage extends BasePage {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        super(page, 'text=Fake Alert Box Examples');
        this.callFakeAlertButton = page.locator("#fakealert");
        this.callModalDialogButton = page.locator("#modaldialog");
        this.dialogheader = page.locator("#dialog-text");
        this.dialogOkButton = page.locator("#dialog-ok");
        this.dialogBackground = page.locator(".faded-background.active");
    }

    async callFakeAlert() {
        await this.callFakeAlertButton.click();
    }

    async callModalDialog() {
        await this.callModalDialogButton.click();
    }

    async confirmDialog() {
        await this.dialogOkButton.click();
    }

    async getDialogHeader() {
        await this.dialogheader.waitFor({timeout: 3000});
        return await this.dialogheader.innerText();
    }

    async clickOnDialogBack() {
        await this.dialogBackground.click({position: {x:0, y:0}});
        await this.dialogBackground.waitFor({state:"hidden"});
    }

    async isDialogBackDisplayed() {
        return await this.dialogBackground.isVisible();
    }
}