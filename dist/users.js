'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _User = require('./User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var admin = new _User2.default({
    displayName: 'Admin',
    email: 'dev@polutz.com',
    userName: 'admin',
    password: 'testtest'
});
var angeloocana = new _User2.default({
    displayName: 'Ângelo Ocanã',
    userName: 'angeloocana',
    email: 'angeloocana@gmail.com',
    password: 'testtest'
});
var alanmarcell = new _User2.default({
    displayName: 'Alan Marcell',
    userName: 'alanmarcell',
    email: 'alanmarcell@live.com',
    password: 'testtest'
});
var allUsers = [admin, angeloocana, alanmarcell];
exports.default = {
    admin: admin,
    angeloocana: angeloocana,
    alanmarcell: alanmarcell,
    allUsers: allUsers
};
//# sourceMappingURL=users.js.map