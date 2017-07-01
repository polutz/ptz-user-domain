'use strict';

var _ptzValidations = require('@alanmarcell/ptz-validations');

var V = _interopRequireWildcard(_ptzValidations);

var _ptzAssert = require('ptz-assert');

var assert = _interopRequireWildcard(_ptzAssert);

var _createUser = require('./createUser');

var User = _interopRequireWildcard(_createUser);

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
                return e.propName === 'userName' && e.errorMsg === V.allErrors.MIN;
            });
        });
        it('Add error when maxLength userName', function () {
            var user = User.createUser({
                userName: 'labalblhblhbohblabcascjbascijbascjbasclasbclasbash',
                email: '', displayName: ''
            });
            assert.containsFind(user.errors, function (e) {
                return e.propName === 'userName' && e.errorMsg === V.allErrors.MAX;
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
    describe('User Functions', function () {
        var user = User.createUser({ userName: '', email: '', displayName: '' });
        it('otherUsersWithSameUserNameOrEmail', function () {
            assert.ok(user.otherUsersWithSameUserNameOrEmail);
        });
        it('update', function () {
            assert.ok(user.update);
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