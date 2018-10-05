'use strict';

module.exports = {
    url: function() {
        return 'https://www.google.com/ncr';
    },
    commands: [{
        checkIfGoogleIsOpen: function() {
            return this.assert.title('Google');
        }
    }]
};