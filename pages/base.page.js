exports.BasePage = class BasePage {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page, locator) {
        this.page = page;
        this.pageUniqElement = page.waitForSelector(locator);
        this.pageHeader = page.locator('h1');
    }

    async navigateTo(locator) {
        await this.page.goto('index.html');
        await this.page.locator(locator).click();
    }

    async isPageOpen() {
        return await (await this.pageUniqElement).isVisible();
    }

    async getPageHeaderText() {
        return await this.pageHeader.innerText();
    }

    async reload() {
        await this.page.reload();
    }
}