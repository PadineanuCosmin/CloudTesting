'use strict';

module.exports = {
    url: function() {
        return 'http://www.thetestroom.com/webapp/';
    },
    elements: {
        adoptOption: {
            selector: 'td.left_link > h1 > a[name="nav_adopt"]'
        },
        selectionBox: {
            selector: '#start_select'
        },
        selectToday: {
            selector: '#start_select option[value=today]'
        },
        checkTurtleAvailabilityButton: {
            selector: '#check_btn_02'
        },
        resultPage: {
            selector: '#result'
        },
        nameField: {
            selector: 'input[name="name_field"]'
        },
        addressField: {
            selector: 'input[name="address_field"]'
        },
        postcodeField: {
            selector: 'input[name="postcode_field"]'
        },
        emailField: {
            selector: 'input[name="email_field"]'
        },
        submitAdoptionButton: {
            selector: '#submit_adoption'
        },
        confirmationURL: {
            selector: 'http://www.thetestroom.com/webapp/adoption_pass_confirm.html'
        }
    },
    commands: [{
        clickTestRoomAdoption: function() {
            return this
                .click('@adoptOption')
                .waitForElementVisible('@selectionBox', 1000);
        },
        openDateSelectionTestRoom: function() {
            return this
                .click('@selectToday');
        },
        checkTurtleAvailabilityTestRoom: function () {
            return this
                .click('@checkTurtleAvailabilityButton')
                .waitForElementVisible('@resultPage', 1000);
        },
        submitAvailabilityFormTestRoom: function () {
            return this
                .setValue('@nameField', 'John Doe')
                .setValue('@addressField', 'Lexington Avenue Nr 15')
                .setValue('@postcodeField', '300300')
                .setValue('@emailField', 'testProblem4@mailinator.com')
                .click('@submitAdoptionButton')
                .assert.urlEquals('@confirmationURL');
        }
    }]
};