'use strict';

var _ptzAssert = require('ptz-assert');

var _ptzValidations = require('ptz-validations');

var _index = require('./index');

describe('AuthUserForm', () => {
    describe('userNameOrEmail', () => {
        it('Add error when empty userNameOrEmail', () => {
            const user = (0, _index.authUserForm)({ userNameOrEmail: '', password: '' });
            (0, _ptzAssert.containsFind)(user.errors, e => e.propName === 'userNameOrEmail' && e.errorMsg === _ptzValidations.allErrors.REQUIRED);
        });
        describe('UserName', () => {
            it('Do not add error when valid username', () => {
                const user = (0, _index.authUserForm)({ userNameOrEmail: 'angeloocana', password: '' });
                (0, _ptzAssert.notContainsFind)(user.errors, e => e.propName === 'userNameOrEmail' && e.errorMsg === _ptzValidations.allErrors.REQUIRED);
            });
            it('Add error when invalid MIN username', () => {
                const user = (0, _index.authUserForm)({ userNameOrEmail: 'ln', password: '' });
                (0, _ptzAssert.containsFind)(user.errors, e => e.propName === 'userNameOrEmail' && e.errorMsg === _ptzValidations.allErrors.MIN);
            });
            it('Should be lowercase', () => {
                const user = (0, _index.authUserForm)({ userNameOrEmail: 'AnGeLoOcAnA', password: '' });
                (0, _ptzAssert.equal)(user.userNameOrEmail, 'angeloocana');
            });
        });
        describe('Email', () => {
            it('Add error when invalid email', () => {
                const user = (0, _index.authUserForm)({ userNameOrEmail: 'angeloocana@gmailcom', password: '' });
                (0, _ptzAssert.containsFind)(user.errors, e => e.propName === 'userNameOrEmail' && e.errorMsg === _ptzValidations.allErrors.INVALID_EMAIL);
            });
            it('Do not add error when valid email', () => {
                const user = (0, _index.authUserForm)({ userNameOrEmail: 'angeloocana@gmail.com', password: '' });
                (0, _ptzAssert.notContainsFind)(user.errors, e => e.propName === 'userNameOrEmail' && e.errorMsg === _ptzValidations.allErrors.REQUIRED);
                (0, _ptzAssert.notContainsFind)(user.errors, e => e.propName === 'userNameOrEmail' && e.errorMsg === _ptzValidations.allErrors.INVALID_EMAIL);
            });
            it('Should be lowercase', () => {
                const user = (0, _index.authUserForm)({ userNameOrEmail: 'AnGeLoOcAnA@gMaIl.CoM', password: '' });
                (0, _ptzAssert.equal)(user.userNameOrEmail, 'angeloocana@gmail.com');
            });
        });
    });
    describe('Password', () => {
        it('Add error when null password', () => {
            const user = (0, _index.authUserForm)({ userNameOrEmail: 'angeloocana', password: null });
            (0, _ptzAssert.containsFind)(user.errors, e => e.propName === 'password' && e.errorMsg === _ptzValidations.allErrors.REQUIRED);
        });
        it('Add error when empty password', () => {
            const user = (0, _index.authUserForm)({ userNameOrEmail: 'angeloocana', password: '' });
            (0, _ptzAssert.containsFind)(user.errors, e => e.propName === 'password' && e.errorMsg === _ptzValidations.allErrors.REQUIRED);
        });
        it('Do not add error when valid password', () => {
            const user = (0, _index.authUserForm)({ userNameOrEmail: 'angeloocana', password: 'superSecret' });
            (0, _ptzAssert.notContainsFind)(user.errors, e => e.propName === 'password' && e.errorMsg === _ptzValidations.allErrors.REQUIRED);
        });
        it('Add error when minlength password', () => {
            const user = (0, _index.authUserForm)({ userNameOrEmail: 'angeloocana', password: 'a' });
            (0, _ptzAssert.containsFind)(user.errors, e => e.propName === 'password' && e.errorMsg === _ptzValidations.allErrors.MIN);
        });
        it('Add error when maxlength password', () => {
            const user = (0, _index.authUserForm)({
                userNameOrEmail: 'angeloocana',
                password: 'labalblhblhbohblabcascjbascijbascjbasclasbclasbash'
            });
            (0, _ptzAssert.containsFind)(user.errors, e => e.propName === 'password' && e.errorMsg === _ptzValidations.allErrors.MAX);
        });
    });
});
//# sourceMappingURL=AuthUserForm.test.js.map
//# sourceMappingURL=AuthUserForm.test.js.map