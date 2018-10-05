module.exports = {
    'Testing Ghost website' : function (browser) {
        var demoTest = browser.page.demoTest();
        browser.windowMaximize();
        demoTest.navigate()
            .clickGhostSupport()
            .searchGhostSupport(browser)
            .openResultGhostSupport();
        browser.end();
    }
};