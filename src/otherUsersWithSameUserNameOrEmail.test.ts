import * as V from '@alanmarcell/ptz-validations';
import * as assert from 'ptz-assert';
import * as User from './index';

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

        const otherUser: User.IUserArgs = {
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

        const otherUser: User.IUserArgs = {
            userName: 'angeloocana',
            email: 'allan.egidio@outlook.com',
            displayName: 'Allan Egidio'
        };

        const userAfter = User.otherUsersWithSameUserNameOrEmail(userBefore, [otherUser]);

        const error = { propName: 'email', errorMsg: User.allErrors.ERROR_USER_EMAIL_IN_USE };

        assert.ok(V.containsError(error, userAfter.errors));
    });
});
