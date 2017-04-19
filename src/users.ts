// Users for seed and test data

import User from './User';

const admin = new User({
    displayName: 'Admin',
    email: 'dev@polutz.com',
    userName: 'admin',
    password: 'testtest'
});

const angeloocana = new User({
    displayName: 'Ângelo Ocanã',
    userName: 'angeloocana',
    email: 'angeloocana@gmail.com',
    password: 'testtest'
});

const alanmarcell = new User({
    displayName: 'Alan Marcell',
    userName: 'alanmarcell',
    email: 'alanmarcell@live.com',
    password: 'testtest'
});

const allUsers = [admin, angeloocana, alanmarcell];

export default {
    admin,
    angeloocana,
    alanmarcell,
    allUsers
};
