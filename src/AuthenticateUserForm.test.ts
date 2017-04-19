import { contains, deepEqual, emptyArray, equal, notContains, notEqual, notOk, ok } from 'ptz-assert';
import log from 'ptz-log';
import errors from './errors';
import { AuthenticateUserForm, IAuthenticateUserForm, IAuthenticateUserFormArgs } from './index';

describe('AuthenticateUserForm', () => {
    describe('userNameOrEmail', () => {
        it('Add error when empty userNameOrEmail', () => {
            const user = new AuthenticateUserForm({ userNameOrEmail: '', password: '' });
            contains(user.errors, errors.ERROR_USER_USERNAME_REQUIRED);
        });

        describe('UserName', () => {
            it('Do not add error when valid username', () => {
                const user = new AuthenticateUserForm({ userNameOrEmail: 'angeloocana', password: '' });
                notContains(user.errors, errors.ERROR_USER_USERNAME_REQUIRED);
            });

            it('Should be lowercase', () => {
                const user = new AuthenticateUserForm({ userNameOrEmail: 'AnGeLoOcAnA', password: '' });
                equal(user.userNameOrEmail, 'angeloocana');
            });
        });

        describe('Email', () => {
            it('Add error when invalid email', () => {
                const user = new AuthenticateUserForm({ userNameOrEmail: 'angeloocana@gmailcom', password: '' });
                contains(user.errors, errors.ERROR_USER_EMAIL_INVALID);
            });

            it('Do not add error when valid email', () => {
                const user = new AuthenticateUserForm({ userNameOrEmail: 'angeloocana@gmail.com', password: '' });

                notContains(user.errors, errors.ERROR_USER_EMAIL_REQUIRED);
                notContains(user.errors, errors.ERROR_USER_EMAIL_INVALID);
            });

            it('Should be lowercase', () => {
                const user = new AuthenticateUserForm({ userNameOrEmail: 'AnGeLoOcAnA@gMaIl.CoM', password: '' });
                equal(user.userNameOrEmail, 'angeloocana@gmail.com');
            });

        });
    });

    describe('Password', () => {
        it('Add error when null password', () => {
            const user = new AuthenticateUserForm({ userNameOrEmail: 'angeloocana', password: null });
            log('user.errors', user.errors);
            contains(user.errors, errors.ERRORS_AUTHENTICATEUSERFORM_PASSWORD_REQUIRED);
        });

        it('Add error when empty password', () => {
            const user = new AuthenticateUserForm({ userNameOrEmail: 'angeloocana', password: '' });
            log('user.errors', user.errors);
            contains(user.errors, errors.ERRORS_AUTHENTICATEUSERFORM_PASSWORD_REQUIRED);
        });

        it('Do not add error when valid password', () => {
            const user = new AuthenticateUserForm({ userNameOrEmail: 'angeloocana', password: 'superSecret' });
            notContains(user.errors, errors.ERRORS_AUTHENTICATEUSERFORM_PASSWORD_REQUIRED);
        });

        it('Add error when minlength password', () => {
            const user = new AuthenticateUserForm({ userNameOrEmail: 'angeloocana', password: 'a' });
            contains(user.errors, errors.ERROR_USER_PASSWORD_MINLENGTH);
        });

        it('Add error when maxlength password', () => {
            const user = new AuthenticateUserForm({
                userNameOrEmail: 'angeloocana',
                password: 'labalblhblhbohblabcascjbascijbascjbasclasbclasbash'
            });
            contains(user.errors, errors.ERROR_USER_PASSWORD_MAXLENGTH);
        });
    });
});
