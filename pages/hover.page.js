const { BasePage } = require("./base.page");

exports.HoverPage = class HoverPage extends BasePage {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        super(page);
        this.hoverParagraph = page.locator('#hoverpara');
        this.textUnderHover = page.locator("#hoverparaeffect");
        this.hoverDiv = page.locator('#hoverdiv');
        this.linkUnderHover = page.locator('#hoverlink');
    }
    
    async hoverOnPagraph() {
        await this.hoverParagraph.hover();
    }

    async isTextShown() {
        return await this.textUnderHover.isVisible();
    }

    async hoverOnDiv() {
        await this.hoverDiv.hover();
    }

    async clickOnLinkUnderHover() {
        await this.linkUnderHover.click();
    }
}