'use strict';

var _ptzAssert = require('ptz-assert');

var _ptzLog = require('ptz-log');

var _ptzLog2 = _interopRequireDefault(_ptzLog);

var _ptzValidations = require('ptz-validations');

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('AuthenticateUserForm', function () {
    describe('userNameOrEmail', function () {
        it('Add error when empty userNameOrEmail', function () {
            var user = new _index.AuthenticateUserForm({ userNameOrEmail: '', password: '' });
            (0, _ptzAssert.containsFind)(user.errors, function (e) {
                return e.propName === 'userNameOrEmail' && e.errorMsg === _ptzValidations.allErrors.REQUIRED;
            });
        });
        describe('UserName', function () {
            it('Do not add error when valid username', function () {
                var user = new _index.AuthenticateUserForm({ userNameOrEmail: 'angeloocana', password: '' });
                (0, _ptzAssert.notContainsFind)(user.errors, function (e) {
                    return e.propName === 'userNameOrEmail' && e.errorMsg === _ptzValidations.allErrors.REQUIRED;
                });
            });
            it('Should be lowercase', function () {
                var user = new _index.AuthenticateUserForm({ userNameOrEmail: 'AnGeLoOcAnA', password: '' });
                (0, _ptzAssert.equal)(user.userNameOrEmail, 'angeloocana');
            });
        });
        describe('Email', function () {
            it('Add error when invalid email', function () {
                var user = new _index.AuthenticateUserForm({ userNameOrEmail: 'angeloocana@gmailcom', password: '' });
                (0, _ptzAssert.containsFind)(user.errors, function (e) {
                    return e.propName === 'userNameOrEmail' && e.errorMsg === _ptzValidations.allErrors.INVALID_EMAIL;
                });
            });
            it('Do not add error when valid email', function () {
                var user = new _index.AuthenticateUserForm({ userNameOrEmail: 'angeloocana@gmail.com', password: '' });
                (0, _ptzAssert.notContainsFind)(user.errors, function (e) {
                    return e.propName === 'userNameOrEmail' && e.errorMsg === _ptzValidations.allErrors.REQUIRED;
                });
                (0, _ptzAssert.notContainsFind)(user.errors, function (e) {
                    return e.propName === 'userNameOrEmail' && e.errorMsg === _ptzValidations.allErrors.INVALID_EMAIL;
                });
            });
            it('Should be lowercase', function () {
                var user = new _index.AuthenticateUserForm({ userNameOrEmail: 'AnGeLoOcAnA@gMaIl.CoM', password: '' });
                (0, _ptzAssert.equal)(user.userNameOrEmail, 'angeloocana@gmail.com');
            });
        });
    });
    describe('Password', function () {
        it('Add error when null password', function () {
            var user = new _index.AuthenticateUserForm({ userNameOrEmail: 'angeloocana', password: null });
            (0, _ptzLog2.default)('user.errors', user.errors);
            (0, _ptzAssert.containsFind)(user.errors, function (e) {
                return e.propName === 'password' && e.errorMsg === _ptzValidations.allErrors.REQUIRED;
            });
        });
        it('Add error when empty password', function () {
            var user = new _index.AuthenticateUserForm({ userNameOrEmail: 'angeloocana', password: '' });
            (0, _ptzLog2.default)('user.errors', user.errors);
            (0, _ptzAssert.containsFind)(user.errors, function (e) {
                return e.propName === 'password' && e.errorMsg === _ptzValidations.allErrors.REQUIRED;
            });
        });
        it('Do not add error when valid password', function () {
            var user = new _index.AuthenticateUserForm({ userNameOrEmail: 'angeloocana', password: 'superSecret' });
            (0, _ptzAssert.notContainsFind)(user.errors, function (e) {
                return e.propName === 'password' && e.errorMsg === _ptzValidations.allErrors.REQUIRED;
            });
        });
        it('Add error when minlength password', function () {
            var user = new _index.AuthenticateUserForm({ userNameOrEmail: 'angeloocana', password: 'a' });
            (0, _ptzAssert.containsFind)(user.errors, function (e) {
                return e.propName === 'password' && e.errorMsg === _ptzValidations.allErrors.MIN_LENGTH;
            });
        });
        it('Add error when maxlength password', function () {
            var user = new _index.AuthenticateUserForm({
                userNameOrEmail: 'angeloocana',
                password: 'labalblhblhbohblabcascjbascijbascjbasclasbclasbash'
            });
            (0, _ptzAssert.containsFind)(user.errors, function (e) {
                return e.propName === 'password' && e.errorMsg === _ptzValidations.allErrors.MAX_LENGTH;
            });
        });
    });
});
//# sourceMappingURL=AuthenticateUserForm.test.js.map