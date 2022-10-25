const { BasePage } = require("./base.page");

exports.MainPage = class MainPage extends BasePage {
    constructor(page) {
        super(page, "text=Test Pages For Automating");
        this.alertPage = '#alerttest';
        this.fakeAlertPage = '#fakealerttest';
        this.framesPage = '#iframestest';
        this.eventsPage = '#javascripteventbuttons';
        this.hoverPage = '#csspseudohover';
        this.firstButtonsPage = '#button01';
        this.secondButtonsPage = '#button02';
        this.clientServerFormPage = '#inputvalidation';
        this.cookiePage = '#adminlogin';
        this.downloadPage = '#download';
        this.html5FormPage = '#html5formtest';
        this.uploadPage = '#fileuploadtest';
        this.userAgentPage = '#useragentredirect';
        this.xhttpMessagesPage = '#xhttpmessages';
        this.dragNDropPage = '#useractionstest';
    }

    async navigateToAlertPage() {
        await this.navigateTo(this.alertPage);
    }

    async navigateToFakeAlertsPage() {
        await this.navigateTo(this.fakeAlertPage);
    }
    
    async navigateToFramesPage() {
        await this.navigateTo(this.framesPage);
    }

    async navigateToEventsPage() {
        await this.navigateTo(this.eventsPage);
    }

    async navigateToHoverPage() {
        await this.navigateTo(this.hoverPage);
    }

    async navigateToFirstButtonsPage() {
        await this.navigateTo(this.firstButtonsPage)
    }

    async navigateToSecondButtonsPage() {
        await this.navigateTo(this.secondButtonsPage)
    }

    async navigateToClientServerFormPage() {
        await this.navigateTo(this.clientServerFormPage);
    }

    async navigateToCookiePage() {
        await this.navigateTo(this.cookiePage);
    }

    async navigateToDownloadPage() {
        await this.navigateTo(this.downloadPage);
    }

    async navigateToHtml5FormPage() {
        await this.navigateTo(this.html5FormPage);
    }

    async navigateToUploadPage() {
        await this.navigateTo(this.uploadPage);
    }

    async navigateToUserAgentPage() {
        await this.navigateTo(this.userAgentPage);
    }

    async navigateToXHTTPMessagesPage() {
        await this.navigateTo(this.xhttpMessagesPage);
    }

    async navigateToDragNDropPage() {
        await this.navigateTo(this.dragNDropPage);
    }
}