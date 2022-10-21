const { test, expect } = require('@playwright/test');

exports.AlertHandler = class AlertHandler {
    /**
     * @param {import('@playwright/test').Page} page
     */
    static handleAlert(page, expectedMessage) {
        page.on('dialog', async (dialog) => {
            if(expectedMessage) expect(dialog.message()).toEqual(expectedMessage);
            await dialog.accept();
        })
    }

    /**
     * @param {import('@playwright/test').Page} page
     * @param {boolean} accept accept dialog or not
     */
    static handleConfirm(page, expectedMessage,accept) {
        page.on('dialog', async dialog => {
            if(expectedMessage) expect(dialog.message()).toContain(expectedMessage);
            accept ? await dialog.accept() : await dialog.dismiss();
        });
    }

    /**
     * @param {import('@playwright/test').Page} page 
     * @param {boolean} accept accept dialog or not
     * @param {string} value value to be send to the prompt 
     * @returns prompt message
     */
    static handlePrompt(page, expectedMessage, value) {
        page.on('dialog', async dialog => {
            if(expectedMessage) expect(dialog.message()).toContain(expectedMessage);
            value ? await dialog.accept(value) : await dialog.dismiss();
        });
    }
}