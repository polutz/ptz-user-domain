import { containsFind, equal, notContainsFind } from 'ptz-assert';
import log from 'ptz-log';
import { allErrors as allValidationErrors } from 'ptz-validations';
import { AuthUserForm } from './index';

describe('AuthUserForm', () => {
    describe('userNameOrEmail', () => {
        it('Add error when empty userNameOrEmail', () => {
            const user = new AuthUserForm({ userNameOrEmail: '', password: '' });
            containsFind(user.errors, e => e.propName === 'userNameOrEmail'
                && e.errorMsg === allValidationErrors.REQUIRED);
        });

        describe('UserName', () => {
            it('Do not add error when valid username', () => {
                const user = new AuthUserForm({ userNameOrEmail: 'angeloocana', password: '' });
                notContainsFind(user.errors, e => e.propName === 'userNameOrEmail'
                    && e.errorMsg === allValidationErrors.REQUIRED);
            });

            it('Should be lowercase', () => {
                const user = new AuthUserForm({ userNameOrEmail: 'AnGeLoOcAnA', password: '' });
                equal(user.userNameOrEmail, 'angeloocana');
            });
        });

        describe('Email', () => {
            it('Add error when invalid email', () => {
                const user = new AuthUserForm({ userNameOrEmail: 'angeloocana@gmailcom', password: '' });
                containsFind(user.errors, e => e.propName === 'userNameOrEmail'
                    && e.errorMsg === allValidationErrors.INVALID_EMAIL);
            });

            it('Do not add error when valid email', () => {
                const user = new AuthUserForm({ userNameOrEmail: 'angeloocana@gmail.com', password: '' });

                notContainsFind(user.errors, e => e.propName === 'userNameOrEmail'
                    && e.errorMsg === allValidationErrors.REQUIRED);
                notContainsFind(user.errors, e => e.propName === 'userNameOrEmail'
                    && e.errorMsg === allValidationErrors.INVALID_EMAIL);
            });

            it('Should be lowercase', () => {
                const user = new AuthUserForm({ userNameOrEmail: 'AnGeLoOcAnA@gMaIl.CoM', password: '' });
                equal(user.userNameOrEmail, 'angeloocana@gmail.com');
            });

        });
    });

    describe('Password', () => {
        it('Add error when null password', () => {
            const user = new AuthUserForm({ userNameOrEmail: 'angeloocana', password: null });
            log('user.errors', user.errors);
            containsFind(user.errors, e => e.propName === 'password'
                && e.errorMsg === allValidationErrors.REQUIRED);
        });

        it('Add error when empty password', () => {
            const user = new AuthUserForm({ userNameOrEmail: 'angeloocana', password: '' });
            log('user.errors', user.errors);
            containsFind(user.errors, e => e.propName === 'password'
                && e.errorMsg === allValidationErrors.REQUIRED);
        });

        it('Do not add error when valid password', () => {
            const user = new AuthUserForm({ userNameOrEmail: 'angeloocana', password: 'superSecret' });
            notContainsFind(user.errors, e => e.propName === 'password'
                && e.errorMsg === allValidationErrors.REQUIRED);
        });

        it('Add error when minlength password', () => {
            const user = new AuthUserForm({ userNameOrEmail: 'angeloocana', password: 'a' });
            containsFind(user.errors, e => e.propName === 'password'
                && e.errorMsg === allValidationErrors.MIN_LENGTH);
        });

        it('Add error when maxlength password', () => {
            const user = new AuthUserForm({
                userNameOrEmail: 'angeloocana',
                password: 'labalblhblhbohblabcascjbascijbascjbasclasbclasbash'
            });
            containsFind(user.errors, e => e.propName === 'password'
                && e.errorMsg === allValidationErrors.MAX_LENGTH);
        });
    });
});
