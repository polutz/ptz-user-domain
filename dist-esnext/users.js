// Users for seed and test data
import { createUser } from './createUser';
export const admin = createUser({
    displayName: 'Admin',
    email: 'dev@polutz.com',
    userName: 'admin',
    password: 'testtest'
});
export const angeloocana = createUser({
    displayName: 'Ângelo Ocanã',
    userName: 'angeloocana',
    email: 'angeloocana@gmail.com',
    password: 'testtest'
});
export const alanmarcell = createUser({
    displayName: 'Alan Marcell',
    userName: 'alanmarcell',
    email: 'alanmarcell@live.com',
    password: 'testtest'
});
export const allUsers = [admin, angeloocana, alanmarcell];
export default allUsers;
export const users = {
    admin,
    angeloocana,
    alanmarcell,
    allUsers
};
//# sourceMappingURL=users.js.map