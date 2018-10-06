module.exports = {
    'Testing Google website' : function (browser) {
        let demoTest = browser.page.demoTest();
        demoTest.navigate()
            .checkIfGoogleIsOpen(browser);
        browser.end();
    }
};