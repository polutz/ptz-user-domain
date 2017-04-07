import { ok } from 'ptz-assert';
import { allUsers } from './users';
describe('users', () => {
    it('allUsers has more than 2 test users', () => {
        ok(allUsers.length > 2);
    });
});
//# sourceMappingURL=users.test.js.map