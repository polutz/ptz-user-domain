import { emptyArray, ok } from 'ptz-assert';
import { users } from './index';

describe('users', () => {
    it('allUsers has more than 2 test users', () => {
        ok(users.allUsers.length > 2);

        users.allUsers.forEach(user => emptyArray(user.errors));
    });
});
