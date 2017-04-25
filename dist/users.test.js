'use strict';

var _ptzAssert = require('ptz-assert');

var _index = require('./index');

describe('users', function () {
    it('allUsers has more than 2 test users', function () {
        (0, _ptzAssert.ok)(_index.users.allUsers.length > 2);
        _index.users.allUsers.forEach(function (user) {
            return (0, _ptzAssert.emptyArray)(user.errors);
        });
    });
});
//# sourceMappingURL=users.test.js.map
//# sourceMappingURL=users.test.js.map