// Users for seed and test data

import User from './User';

export const admin = new User({
    displayName: 'Admin',
    email: 'dev@polutz.com',
    userName: 'admin',
    password: 'testtest'
});

export const angeloocana = new User({
    displayName: 'Ângelo Ocanã',
    userName: 'angeloocana',
    email: 'angeloocana@gmail.com',
    password: 'testtest'
});

export const alanmarcell = new User({
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
