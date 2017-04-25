import { equal, ok } from 'ptz-assert';
import {
    allErrors,
    AuthenticateUserForm,

    IAppFuncArgs,
    IAuthenticateUserForm, IAuthenticateUserFormArgs,
    IAuthToken,
    ICreatedBy, IUser, IUserApp,
    IUserAppArgs,
    IUserAppIAuthenticateUserArgs,
    IUserAppIFindArgs,
    IUserAppIGetAuthTokenArgs,
    IUserAppISaveArgs,
    IUserAppIVerifyAuthTokenArgs,
    IUserArgs,
    IUserForLog,
    IUserRepository,

    User,
    users
} from './index';

describe('ptz-user-domain', () => {
    describe('exports', () => {
        it('allErrors', () => ok(allErrors));
        it('AuthenticateUserForm', () => ok(AuthenticateUserForm));
        it('User', () => ok(User));
        it('users', () => ok(users));
    });
});
