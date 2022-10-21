const { BasePage } = require("./base.page");

exports.MainPage = class MainPage extends BasePage {
    constructor(page) {
        super(page);
    }

    async navigateToAlertPage() {
        await this.navigateTo('#alerttest');
    }

    async navigateToFakeAlertsPage() {
        await this.navigateTo('#fakealerttest');
    }
    
    async navigateToFramesPage() {
        await this.navigateTo('#iframestest');
    }

    async navigateToEventsPage() {
        await this.navigateTo('#javascripteventbuttons');
    }

    async navigateToHoverPage() {
        await this.navigateTo('#csspseudohover');
    }

    async navigateToFirstButtonsPage() {
        await this.navigateTo('#button01')
    }

    async navigateToSecondButtonsPage() {
        await this.navigateTo('#button02')
    }

    async navigateToClientServerFormPage() {
        await this.navigateTo('#inputvalidation');
    }

    async navigateToCookiePage() {
        await this.navigateTo('#adminlogin');
    }
}