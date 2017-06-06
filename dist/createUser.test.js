'use strict';

var _ptzAssert = require('ptz-assert');

var assert = _interopRequireWildcard(_ptzAssert);

var _ptzValidations = require('ptz-validations');

var V = _interopRequireWildcard(_ptzValidations);

var _index = require('./index');

var User = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe('createUser', function () {
    describe('UserName', function () {
        it('Add error when null username', function () {
            var user = User.createUser({ userName: null, email: '', displayName: '' });
            assert.containsFind(user.errors, function (e) {
                return e.propName === 'userName' && e.errorMsg === V.allErrors.REQUIRED;
            });
        });
        it('Add error when empty username', function () {
            var user = User.createUser({ userName: '', email: '', displayName: '' });
            assert.containsFind(user.errors, function (e) {
                return e.propName === 'userName' && e.errorMsg === V.allErrors.REQUIRED;
            });
        });
        it('Do not add error when valid username', function () {
            var user = User.createUser({ userName: 'angeloocana', email: '', displayName: '' });
            assert.notContainsFind(user.errors, function (e) {
                return e.propName === 'userName' && e.errorMsg === V.allErrors.REQUIRED;
            });
        });
        it('Add error when minLength userName', function () {
            var user = User.createUser({ userName: 'a', email: '', displayName: '' });
            assert.containsFind(user.errors, function (e) {
                return e.propName === 'userName' && e.errorMsg === V.allErrors.MIN_LENGTH;
            });
        });
        it('Add error when maxLength userName', function () {
            var user = User.createUser({
                userName: 'labalblhblhbohblabcascjbascijbascjbasclasbclasbash',
                email: '', displayName: ''
            });
            assert.containsFind(user.errors, function (e) {
                return e.propName === 'userName' && e.errorMsg === V.allErrors.MAX_LENGTH;
            });
        });
        it('Should be lowercase', function () {
            var user = User.createUser({ userName: 'AnGeLoOcAnA', email: '', displayName: '' });
            assert.equal(user.userName, 'angeloocana');
        });
    });
    describe('Email', function () {
        it('Add error when empty email', function () {
            var user = User.createUser({ userName: '', email: '', displayName: '' });
            assert.containsFind(user.errors, function (e) {
                return e.propName === 'email' && e.errorMsg === V.allErrors.REQUIRED;
            });
        });
        it('Add error when invalid email', function () {
            var user = User.createUser({ userName: '', email: 'angeloocanagmail.com', displayName: '' });
            assert.containsFind(user.errors, function (e) {
                return e.propName === 'email' && e.errorMsg === V.allErrors.INVALID_EMAIL;
            });
        });
        it('Do not add error when valid email', function () {
            var user = User.createUser({ userName: 'angeloocana', email: 'angeloocana@gmail.com', displayName: '' });
            assert.notContainsFind(user.errors, function (e) {
                return e.propName === 'email' && e.errorMsg === V.allErrors.REQUIRED;
            });
            assert.notContainsFind(user.errors, function (e) {
                return e.propName === 'email' && e.errorMsg === V.allErrors.INVALID_EMAIL;
            });
        });
        it('Should be lowercase', function () {
            var user = User.createUser({ userName: 'AnGeLoOcAnA', email: 'AnGeLoOcAnA@gMaIl.CoM', displayName: '' });
            assert.equal(user.email, 'angeloocana@gmail.com');
        });
    });
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
    it('throw error when null args', function () {
        assert.throws(function () {
            return User.createUser(null);
        });
    });
});
//# sourceMappingURL=createUser.test.js.map
//# sourceMappingURL=createUser.test.js.map