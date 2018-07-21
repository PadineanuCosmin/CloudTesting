module.exports = {
    'Testing Ghost website' : function (browser) {
        var question3 = browser.page.question3();
        browser.windowMaximize();
        question3.navigate()
            .clickGhostSupport()
            .searchGhostSupport(browser)
            .openResultGhostSupport();
        browser.end();
    }
};