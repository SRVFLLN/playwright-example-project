exports.DownloadHandler = class DownloadHandler {
    /**
     * @param {import('@playwright/test').Page} page
     */
    static async waitAndSaveFile(page, triggerLocator, filePath) {
        const [ download ] = await Promise.all([
            page.waitForEvent('download'), 
            triggerLocator.click(),
        ]);
        await download.saveAs(filePath);
    }
}