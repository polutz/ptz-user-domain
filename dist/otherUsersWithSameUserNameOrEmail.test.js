'use strict';

var _ptzAssert = require('ptz-assert');

var assert = _interopRequireWildcard(_ptzAssert);

var _ptzValidations = require('ptz-validations');

var V = _interopRequireWildcard(_ptzValidations);

var _index = require('./index');

var User = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe('otherUsersWithSameUserNameOrEmail', function () {
    it('do NOT add error when otherUsers is empty', function () {
        var userBefore = User.createUser({
            userName: 'allanegidio',
            email: 'allan.egidio@outlook.com',
            displayName: 'Allan Egidio'
        });
        var userAfter = User.otherUsersWithSameUserNameOrEmail(userBefore, []);
        assert.emptyArray(userAfter.errors);
    });
    it('do NOT add error when otherUsers is null', function () {
        var userBefore = User.createUser({
            userName: 'allanegidio',
            email: 'allan.egidio@outlook.com',
            displayName: 'Allan Egidio'
        });
        var userAfter = User.otherUsersWithSameUserNameOrEmail(userBefore, null);
        assert.emptyArray(userAfter.errors);
    });
    it('add error when userName already in use', function () {
        var userBefore = User.createUser({
            userName: 'allanegidio',
            email: 'allan.egidio@outlook.com',
            displayName: 'Allan Egidio'
        });
        var otherUser = {
            userName: 'allanegidio',
            email: 'angeloocana@gmail.com',
            displayName: 'Angelo Ocana'
        };
        var userAfter = User.otherUsersWithSameUserNameOrEmail(userBefore, [otherUser]);
        var error = { propName: 'userName', errorMsg: User.allErrors.ERROR_USER_USERNAME_IN_USE };
        assert.ok(V.containsError(error, userAfter.errors));
    });
    it('add error when email already in use', function () {
        var userBefore = User.createUser({
            userName: 'allanegidio',
            email: 'allan.egidio@outlook.com',
            displayName: 'Allan Egidio'
        });
        var otherUser = {
            userName: 'angeloocana',
            email: 'allan.egidio@outlook.com',
            displayName: 'Allan Egidio'
        };
        var userAfter = User.otherUsersWithSameUserNameOrEmail(userBefore, [otherUser]);
        var error = { propName: 'email', errorMsg: User.allErrors.ERROR_USER_EMAIL_IN_USE };
        assert.ok(V.containsError(error, userAfter.errors));
    });
});
//# sourceMappingURL=otherUsersWithSameUserNameOrEmail.test.js.map
//# sourceMappingURL=otherUsersWithSameUserNameOrEmail.test.js.map