'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.users = exports.allUsers = exports.alanmarcell = exports.angeloocana = exports.admin = undefined;

var _User = require('./User');

var admin = exports.admin = new _User.User({
    displayName: 'Admin',
    email: 'dev@polutz.com',
    userName: 'admin',
    password: 'testtest'
}); // Users for seed and test data
var angeloocana = exports.angeloocana = new _User.User({
    displayName: 'Ângelo Ocanã',
    userName: 'angeloocana',
    email: 'angeloocana@gmail.com',
    password: 'testtest'
});
var alanmarcell = exports.alanmarcell = new _User.User({
    displayName: 'Alan Marcell',
    userName: 'alanmarcell',
    email: 'alanmarcell@live.com',
    password: 'testtest'
});
var allUsers = exports.allUsers = [admin, angeloocana, alanmarcell];
exports.default = allUsers;
var users = exports.users = {
    admin: admin,
    angeloocana: angeloocana,
    alanmarcell: alanmarcell,
    allUsers: allUsers
};
//# sourceMappingURL=users.js.map
//# sourceMappingURL=users.js.map