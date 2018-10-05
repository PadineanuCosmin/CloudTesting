module.exports = {
    'Testing Google website' : function (browser) {
        var demoTest = browser.page.demoTest();
        demoTest.navigate()
            .checkIfGoogleIsOpen(browser);
        browser.end();
    }
};