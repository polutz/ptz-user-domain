'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.users = exports.allUsers = exports.alanmarcell = exports.angeloocana = exports.admin = undefined;

var _createUser = require('./createUser');

const admin = exports.admin = (0, _createUser.createUser)({
    displayName: 'Admin',
    email: 'dev@polutz.com',
    userName: 'admin',
    password: 'testtest'
}); // Users for seed and test data
const angeloocana = exports.angeloocana = (0, _createUser.createUser)({
    displayName: 'Ângelo Ocanã',
    userName: 'angeloocana',
    email: 'angeloocana@gmail.com',
    password: 'testtest'
});
const alanmarcell = exports.alanmarcell = (0, _createUser.createUser)({
    displayName: 'Alan Marcell',
    userName: 'alanmarcell',
    email: 'alanmarcell@live.com',
    password: 'testtest'
});
const allUsers = exports.allUsers = [admin, angeloocana, alanmarcell];
exports.default = allUsers;
const users = exports.users = {
    admin,
    angeloocana,
    alanmarcell,
    allUsers
};
//# sourceMappingURL=users.js.map
//# sourceMappingURL=users.js.map