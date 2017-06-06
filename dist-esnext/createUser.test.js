import * as assert from 'ptz-assert';
import * as V from 'ptz-validations';
import * as User from './index';
describe('createUser', () => {
    describe('UserName', () => {
        it('Add error when null username', () => {
            const user = User.createUser({ userName: null, email: '', displayName: '' });
            assert.containsFind(user.errors, e => e.propName === 'userName'
                && e.errorMsg === V.allErrors.REQUIRED);
        });
        it('Add error when empty username', () => {
            const user = User.createUser({ userName: '', email: '', displayName: '' });
            assert.containsFind(user.errors, e => e.propName === 'userName'
                && e.errorMsg === V.allErrors.REQUIRED);
        });
        it('Do not add error when valid username', () => {
            const user = User.createUser({ userName: 'angeloocana', email: '', displayName: '' });
            assert.notContainsFind(user.errors, e => e.propName === 'userName'
                && e.errorMsg === V.allErrors.REQUIRED);
        });
        it('Add error when minLength userName', () => {
            const user = User.createUser({ userName: 'a', email: '', displayName: '' });
            assert.containsFind(user.errors, e => e.propName === 'userName'
                && e.errorMsg === V.allErrors.MIN_LENGTH);
        });
        it('Add error when maxLength userName', () => {
            const user = User.createUser({
                userName: 'labalblhblhbohblabcascjbascijbascjbasclasbclasbash',
                email: '', displayName: ''
            });
            assert.containsFind(user.errors, e => e.propName === 'userName'
                && e.errorMsg === V.allErrors.MAX_LENGTH);
        });
        it('Should be lowercase', () => {
            const user = User.createUser({ userName: 'AnGeLoOcAnA', email: '', displayName: '' });
            assert.equal(user.userName, 'angeloocana');
        });
    });
    describe('Email', () => {
        it('Add error when empty email', () => {
            const user = User.createUser({ userName: '', email: '', displayName: '' });
            assert.containsFind(user.errors, e => e.propName === 'email'
                && e.errorMsg === V.allErrors.REQUIRED);
        });
        it('Add error when invalid email', () => {
            const user = User.createUser({ userName: '', email: 'angeloocanagmail.com', displayName: '' });
            assert.containsFind(user.errors, e => e.propName === 'email'
                && e.errorMsg === V.allErrors.INVALID_EMAIL);
        });
        it('Do not add error when valid email', () => {
            const user = User.createUser({ userName: 'angeloocana', email: 'angeloocana@gmail.com', displayName: '' });
            assert.notContainsFind(user.errors, e => e.propName === 'email'
                && e.errorMsg === V.allErrors.REQUIRED);
            assert.notContainsFind(user.errors, e => e.propName === 'email'
                && e.errorMsg === V.allErrors.INVALID_EMAIL);
        });
        it('Should be lowercase', () => {
            const user = User.createUser({ userName: 'AnGeLoOcAnA', email: 'AnGeLoOcAnA@gMaIl.CoM', displayName: '' });
            assert.equal(user.email, 'angeloocana@gmail.com');
        });
    });
    describe('otherUsersWithSameUserNameOrEmail', () => {
        it('do NOT add error when otherUsers is empty', () => {
            const userBefore = User.createUser({
                userName: 'allanegidio',
                email: 'allan.egidio@outlook.com',
                displayName: 'Allan Egidio'
            });
            const userAfter = User.otherUsersWithSameUserNameOrEmail(userBefore, []);
            assert.emptyArray(userAfter.errors);
        });
        it('do NOT add error when otherUsers is null', () => {
            const userBefore = User.createUser({
                userName: 'allanegidio',
                email: 'allan.egidio@outlook.com',
                displayName: 'Allan Egidio'
            });
            const userAfter = User.otherUsersWithSameUserNameOrEmail(userBefore, null);
            assert.emptyArray(userAfter.errors);
        });
        it('add error when userName already in use', () => {
            const userBefore = User.createUser({
                userName: 'allanegidio',
                email: 'allan.egidio@outlook.com',
                displayName: 'Allan Egidio'
            });
            const otherUser = {
                userName: 'allanegidio',
                email: 'angeloocana@gmail.com',
                displayName: 'Angelo Ocana'
            };
            const userAfter = User.otherUsersWithSameUserNameOrEmail(userBefore, [otherUser]);
            const error = { propName: 'userName', errorMsg: User.allErrors.ERROR_USER_USERNAME_IN_USE };
            assert.ok(V.containsError(error, userAfter.errors));
        });
        it('add error when email already in use', () => {
            const userBefore = User.createUser({
                userName: 'allanegidio',
                email: 'allan.egidio@outlook.com',
                displayName: 'Allan Egidio'
            });
            const otherUser = {
                userName: 'angeloocana',
                email: 'allan.egidio@outlook.com',
                displayName: 'Allan Egidio'
            };
            const userAfter = User.otherUsersWithSameUserNameOrEmail(userBefore, [otherUser]);
            const error = { propName: 'email', errorMsg: User.allErrors.ERROR_USER_EMAIL_IN_USE };
            assert.ok(V.containsError(error, userAfter.errors));
        });
    });
    it('throw error when null args', () => {
        assert.throws(() => User.createUser(null));
    });
});
//# sourceMappingURL=createUser.test.js.map