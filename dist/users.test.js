'use strict';

var _ptzAssert = require('ptz-assert');

var _users = require('./users');

describe('users', function () {
    it('allUsers has more than 2 test users', function () {
        (0, _ptzAssert.ok)(_users.allUsers.length > 2);
    });
});
//# sourceMappingURL=users.test.js.map