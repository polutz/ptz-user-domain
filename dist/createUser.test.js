'use strict';

var _ptzAssert = require('ptz-assert');

var assert = _interopRequireWildcard(_ptzAssert);

var _ptzValidations = require('ptz-validations');

var V = _interopRequireWildcard(_ptzValidations);

var _createUser = require('./createUser');

var User = _interopRequireWildcard(_createUser);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe('createUser', () => {
    describe('UserName', () => {
        it('Add error when null username', () => {
            const user = User.createUser({ userName: null, email: '', displayName: '' });
            assert.containsFind(user.errors, e => e.propName === 'userName' && e.errorMsg === V.allErrors.REQUIRED);
        });
        it('Add error when empty username', () => {
            const user = User.createUser({ userName: '', email: '', displayName: '' });
            assert.containsFind(user.errors, e => e.propName === 'userName' && e.errorMsg === V.allErrors.REQUIRED);
        });
        it('Do not add error when valid username', () => {
            const user = User.createUser({ userName: 'angeloocana', email: '', displayName: '' });
            assert.notContainsFind(user.errors, e => e.propName === 'userName' && e.errorMsg === V.allErrors.REQUIRED);
        });
        it('Add error when minLength userName', () => {
            const user = User.createUser({ userName: 'a', email: '', displayName: '' });
            assert.containsFind(user.errors, e => e.propName === 'userName' && e.errorMsg === V.allErrors.MIN);
        });
        it('Add error when maxLength userName', () => {
            const user = User.createUser({
                userName: 'labalblhblhbohblabcascjbascijbascjbasclasbclasbash',
                email: '', displayName: ''
            });
            assert.containsFind(user.errors, e => e.propName === 'userName' && e.errorMsg === V.allErrors.MAX);
        });
        it('Should be lowercase', () => {
            const user = User.createUser({ userName: 'AnGeLoOcAnA', email: '', displayName: '' });
            assert.equal(user.userName, 'angeloocana');
        });
    });
    describe('Email', () => {
        it('Add error when empty email', () => {
            const user = User.createUser({ userName: '', email: '', displayName: '' });
            assert.containsFind(user.errors, e => e.propName === 'email' && e.errorMsg === V.allErrors.REQUIRED);
        });
        it('Add error when invalid email', () => {
            const user = User.createUser({ userName: '', email: 'angeloocanagmail.com', displayName: '' });
            assert.containsFind(user.errors, e => e.propName === 'email' && e.errorMsg === V.allErrors.INVALID_EMAIL);
        });
        it('Do not add error when valid email', () => {
            const user = User.createUser({ userName: 'angeloocana', email: 'angeloocana@gmail.com', displayName: '' });
            assert.notContainsFind(user.errors, e => e.propName === 'email' && e.errorMsg === V.allErrors.REQUIRED);
            assert.notContainsFind(user.errors, e => e.propName === 'email' && e.errorMsg === V.allErrors.INVALID_EMAIL);
        });
        it('Should be lowercase', () => {
            const user = User.createUser({ userName: 'AnGeLoOcAnA', email: 'AnGeLoOcAnA@gMaIl.CoM', displayName: '' });
            assert.equal(user.email, 'angeloocana@gmail.com');
        });
    });
    it('throw error when null args', () => {
        assert.throws(() => User.createUser(null));
    });
});
//# sourceMappingURL=createUser.test.js.map
//# sourceMappingURL=createUser.test.js.map