import { ok } from 'ptz-assert';
import { allErrors, AuthenticateUserForm, User, users } from './index';
describe('ptz-user-domain', () => {
    describe('exports', () => {
        it('allErrors', () => ok(allErrors));
        it('AuthenticateUserForm', () => ok(AuthenticateUserForm));
        it('User', () => ok(User));
        it('users', () => ok(users));
    });
});
//# sourceMappingURL=index.test.js.map