// Users for seed and test data

import User from './User';

var admin = new User({
    displayName: 'Admin',
    email: 'dev@polutz.com',
    userName: 'admin',
    password: 'admin'
});

var angeloocana = new User({
    displayName: 'Ângelo Ocanã',
    userName: 'angeloocana',
    email: 'angeloocana@gmail.com',
    password: 'admin'
});

var alanmarcell = new User({
    displayName: 'Alan Marcell',
    userName: 'alanmarcell',
    email: 'alanmarcell@live.com',
    password: 'admin'
});

var allUsers = [admin, angeloocana, alanmarcell];

export {
    admin,
    angeloocana,
    alanmarcell,
    allUsers
}
