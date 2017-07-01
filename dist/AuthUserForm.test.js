'use strict';

var _ptzValidations = require('@alanmarcell/ptz-validations');

var _ptzAssert = require('ptz-assert');

var _index = require('./index');

describe('AuthUserForm', function () {
    describe('userNameOrEmail', function () {
        it('Add error when empty userNameOrEmail', function () {
            var user = (0, _index.authUserForm)({ userNameOrEmail: '', password: '' });
            (0, _ptzAssert.containsFind)(user.errors, function (e) {
                return e.propName === 'userNameOrEmail' && e.errorMsg === _ptzValidations.allErrors.REQUIRED;
            });
        });
        describe('UserName', function () {
            it('Do not add error when valid username', function () {
                var user = (0, _index.authUserForm)({ userNameOrEmail: 'angeloocana', password: '' });
                (0, _ptzAssert.notContainsFind)(user.errors, function (e) {
                    return e.propName === 'userNameOrEmail' && e.errorMsg === _ptzValidations.allErrors.REQUIRED;
                });
            });
            it('Add error when invalid MIN username', function () {
                var user = (0, _index.authUserForm)({ userNameOrEmail: 'ln', password: '' });
                (0, _ptzAssert.containsFind)(user.errors, function (e) {
                    return e.propName === 'userNameOrEmail' && e.errorMsg === _ptzValidations.allErrors.MIN;
                });
            });
            it('Should be lowercase', function () {
                var user = (0, _index.authUserForm)({ userNameOrEmail: 'AnGeLoOcAnA', password: '' });
                (0, _ptzAssert.equal)(user.userNameOrEmail, 'angeloocana');
            });
        });
        describe('Email', function () {
            it('Add error when invalid email', function () {
                var user = (0, _index.authUserForm)({ userNameOrEmail: 'angeloocana@gmailcom', password: '' });
                (0, _ptzAssert.containsFind)(user.errors, function (e) {
                    return e.propName === 'userNameOrEmail' && e.errorMsg === _ptzValidations.allErrors.INVALID_EMAIL;
                });
            });
            it('Do not add error when valid email', function () {
                var user = (0, _index.authUserForm)({ userNameOrEmail: 'angeloocana@gmail.com', password: '' });
                (0, _ptzAssert.notContainsFind)(user.errors, function (e) {
                    return e.propName === 'userNameOrEmail' && e.errorMsg === _ptzValidations.allErrors.REQUIRED;
                });
                (0, _ptzAssert.notContainsFind)(user.errors, function (e) {
                    return e.propName === 'userNameOrEmail' && e.errorMsg === _ptzValidations.allErrors.INVALID_EMAIL;
                });
            });
            it('Should be lowercase', function () {
                var user = (0, _index.authUserForm)({ userNameOrEmail: 'AnGeLoOcAnA@gMaIl.CoM', password: '' });
                (0, _ptzAssert.equal)(user.userNameOrEmail, 'angeloocana@gmail.com');
            });
        });
    });
    describe('Password', function () {
        it('Add error when null password', function () {
            var user = (0, _index.authUserForm)({ userNameOrEmail: 'angeloocana', password: null });
            (0, _ptzAssert.containsFind)(user.errors, function (e) {
                return e.propName === 'password' && e.errorMsg === _ptzValidations.allErrors.REQUIRED;
            });
        });
        it('Add error when empty password', function () {
            var user = (0, _index.authUserForm)({ userNameOrEmail: 'angeloocana', password: '' });
            (0, _ptzAssert.containsFind)(user.errors, function (e) {
                return e.propName === 'password' && e.errorMsg === _ptzValidations.allErrors.REQUIRED;
            });
        });
        it('Do not add error when valid password', function () {
            var user = (0, _index.authUserForm)({ userNameOrEmail: 'angeloocana', password: 'superSecret' });
            (0, _ptzAssert.notContainsFind)(user.errors, function (e) {
                return e.propName === 'password' && e.errorMsg === _ptzValidations.allErrors.REQUIRED;
            });
        });
        it('Add error when minlength password', function () {
            var user = (0, _index.authUserForm)({ userNameOrEmail: 'angeloocana', password: 'a' });
            (0, _ptzAssert.containsFind)(user.errors, function (e) {
                return e.propName === 'password' && e.errorMsg === _ptzValidations.allErrors.MIN;
            });
        });
        it('Add error when maxlength password', function () {
            var user = (0, _index.authUserForm)({
                userNameOrEmail: 'angeloocana',
                password: 'labalblhblhbohblabcascjbascijbascjbasclasbclasbash'
            });
            (0, _ptzAssert.containsFind)(user.errors, function (e) {
                return e.propName === 'password' && e.errorMsg === _ptzValidations.allErrors.MAX;
            });
        });
    });
});
//# sourceMappingURL=AuthUserForm.test.js.map
//# sourceMappingURL=AuthUserForm.test.js.map