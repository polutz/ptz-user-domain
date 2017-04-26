import { equal, ok } from 'ptz-assert';
import {
    allErrors,
    AuthUserForm,
    IAppFuncArgs,
    IAuthToken,
    IAuthUserArgs,
    IAuthUserForm,
    IAuthUserFormArgs,
    ICreatedBy,
    IDeleteUserArgs,
    IFindUsersArgs,
    IForgotPasswordArgs,
    ISaveUserArgs,
    IUpdatePasswordArgs,
    IUpdatePasswordTokenArgs,
    IUser,
    IUserApp,
    IUserAppArgs,
    IUserArgs,
    IUserForLog,
    IUserRepository,
    IVerifyAuthTokenArgs,
    User,
    users,
    validateUserNameOrEmail
} from './index';

describe('ptz-user-domain', () => {
    describe('exports', () => {
        it('allErrors', () => ok(allErrors));
        it('AuthUserForm', () => ok(AuthUserForm));
        it('User', () => ok(User));
        it('users', () => ok(users));
        it('validateUserNameOrEmail', () => ok(validateUserNameOrEmail));
    });
});
