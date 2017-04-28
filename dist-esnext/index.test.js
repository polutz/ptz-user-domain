import { ok } from 'ptz-assert';
import { allErrors, AuthUserForm, User, users, validateUserNameOrEmail } from './index';
describe('ptz-user-domain', () => {
    describe('exports', () => {
        it('allErrors', () => ok(allErrors));
        it('AuthUserForm', () => ok(AuthUserForm));
        it('User', () => ok(User));
        it('users', () => ok(users));
        it('validateUserNameOrEmail', () => ok(validateUserNameOrEmail));
    });
});
//# sourceMappingURL=index.test.js.map