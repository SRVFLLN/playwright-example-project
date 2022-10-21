const { BasePage } = require("./base.page");

exports.EventsPage = class EventsPage extends BasePage {
    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        super(page);
        this.blurTriggerButton = page.locator('#onblur');
        this.blurTriggerStatus = page.locator('#onblurstatus');
        this.clickTriggerButton = page.locator('#onclick');
        this.clickTriggerStatus = page.locator('#onclickstatus');
        this.contextTriggerButton = page.locator('#oncontextmenu');
        this.contextTriggerStatus = page.locator('#oncontextmenustatus');
        this.dbClickTriggerButton = page.locator('#ondoubleclick');
        this.dbClickTriggerStatus = page.locator('#ondoubleclickstatus');
        this.focusTriggerButton = page.locator('#onfocus');
        this.focusTriggerStatus = page.locator('#onfocusstatus');
        this.keyDownTriggerButton = page.locator('#onkeydown');
        this.keyDownTriggerStatus = page.locator('#onkeydownstatus');
        this.keyUpTriggerButton = page.locator('#onkeyup');
        this.keyUpTriggerStatus = page.locator('#onkeyupstatus');
        this.keyPressTriggerButton = page.locator('#onkeypress');
        this.keyPressTriggerStatus = page.locator('#onkeypressstatus');
        this.mouseOverTriggerButton = page.locator('#onmouseover');
        this.mouseOverTriggerStatus = page.locator('#onmouseoverstatus');
        this.mouseLeaveTriggerButton = page.locator('#onmouseleave');
        this.mouseLeaveTriggerStatus = page.locator('#onmouseleavestatus');
        this.mouseDownTriggerButton = page.locator('#onmousedown');
        this.mouseDownTriggerStatus = page.locator('#onmousedownstatus');
    }

    async triggerBlur() {
        await this.blurTriggerButton.focus();
        await this.blurTriggerButton.evaluate(element => element.blur());
        return await this.blurTriggerStatus.innerText();
    }

    async triggerClick() {
        await this.clickTriggerButton.click();
        return await this.clickTriggerStatus.innerText();
    }

    async triggerContext() {
        await this.contextTriggerButton.click({button: 'right'});
        return await this.contextTriggerStatus.innerText();
    }

    async triggerDoubleClick() {
        await this.dbClickTriggerButton.dblclick();
        return await this.dbClickTriggerStatus.innerText();
    }

    async triggerFocus() {
        await this.focusTriggerButton.focus();
        return await this.focusTriggerStatus.innerText();
    }

    async triggerKeyDown() {
        await this.keyDownTriggerButton.focus();
        await this.page.keyboard.down('a');
        return await this.keyDownTriggerStatus.innerText();
    }

    async triggerKeyUp() {
        await this.keyUpTriggerButton.focus();
        await this.page.keyboard.up('a');
        return await this.keyUpTriggerStatus.innerText();
    }

    async triggerKeyPress() {
        await this.keyPressTriggerButton.press('a');
        return await this.keyPressTriggerStatus.innerText();
    }

    async triggerMouseOver() {
        await this.mouseOverTriggerButton.hover();
        return await this.mouseOverTriggerStatus.innerText();
    }

    async triggerMouseLeave() {
        await this.mouseLeaveTriggerButton.hover();
        await this.page.locator('//html').hover({force: true, position: { x: 0, y: 0}});
        return await this.mouseLeaveTriggerStatus.innerText();
    }

    async triggerMouseDown() {
        await this.mouseDownTriggerButton.click()
        return await this.mouseDownTriggerStatus.innerText();
    }
}