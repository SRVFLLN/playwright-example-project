const { test, expect } = require('@playwright/test');
const { MainPage } = require('../pages/main.page');
const { DownloadPage } = require('../pages/download.page');
const { DownloadHandler } = require('../utils/downloads-handler');
const fs = require('fs');

test.describe("Download page", () => {
    test('should trigger download (trigger and handling specific event)', async({page}) => {
        await new MainPage(page).navigateToDownloadPage();
        let downloadPage = new DownloadPage(page);
        expect(await downloadPage.isPageOpen()).toEqual(true);
        let path = "download/file.txt";
        await DownloadHandler.waitAndSaveFile(page, downloadPage.downloadFileButton, path);
        expect(fs.existsSync(path)).toBe(true)
    })
});