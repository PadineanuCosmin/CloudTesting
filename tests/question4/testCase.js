module.exports = {
    'Testing Adoption website' : function (browser) {
        var question4 = browser.page.question4();
        browser.windowMaximize();
        question4.navigate()
            .clickTestRoomAdoption()
            .openDateSelectionTestRoom()
            .checkTurtleAvailabilityTestRoom()
            .submitAvailabilityFormTestRoom();
        browser.end();
    }
};