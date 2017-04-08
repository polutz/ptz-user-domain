// Users for seed and test data

import User from './User';

const admin = new User({
    displayName: 'Admin',
    email: 'dev@polutz.com',
    userName: 'admin',
    password: 'admin'
});

const angeloocana = new User({
    displayName: 'Ângelo Ocanã',
    userName: 'angeloocana',
    email: 'angeloocana@gmail.com',
    password: 'admin'
});

const alanmarcell = new User({
    displayName: 'Alan Marcell',
    userName: 'alanmarcell',
    email: 'alanmarcell@live.com',
    password: 'admin'
});

const allUsers = [admin, angeloocana, alanmarcell];

export {
    admin,
    angeloocana,
    alanmarcell,
    allUsers
};
