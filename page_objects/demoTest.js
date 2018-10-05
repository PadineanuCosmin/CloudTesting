'use strict';

module.exports = {
    url: function() {
        return 'https://ghost.org/';
    },
    elements: {
        supportLink: {
            selector: 'div.gh-navbar-right > a.gh-navbar-item:nth-child(2)'
        },
        searchInputField: {
            selector: 'input[placeholder="I need help with..."]'
        },
        resultNumbers: {
            selector: 'span.color--texthead'
        },
        firstSearchResult: {
            selector: 'li.media:nth-child(1) > div > h2 > a'
        }
    },
    commands: [{
        clickGhostSupport: function() {
            return this
                .click('@supportLink')
                .waitForElementVisible('@searchInputField', 1000);
        },
        searchGhostSupport: function(browser) {
            return this
                .setValue('@searchInputField', ['create new blog', browser.Keys.ENTER])
                .waitForElementVisible('@resultNumbers');
        },
        openResultGhostSupport: function () {
            return this
                .click('@firstSearchResult')
                .waitForElementVisible('article');
        }
    }]
};