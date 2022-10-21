exports.BasePage = class BasePage {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;
        this.pageHeader = page.locator('h1');
    }

    async navigateTo(locator) {
        await this.page.goto('index.html');
        await this.page.locator(locator).click();
    }

    async isPageOpen() {
        await this.page.waitForSelector('h1');
        return await this.pageHeader.isVisible();
    }

    async getPageHeaderText() {
        await this.page.waitForSelector('h1');
        return await this.pageHeader.innerText();
    }

    async reload() {
        await this.page.reload();
    }
}