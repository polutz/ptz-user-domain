'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.allUsers = exports.alanmarcell = exports.angeloocana = exports.admin = undefined;

var _User = require('./User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var admin = new _User2.default({
    displayName: 'Admin',
    email: 'dev@polutz.com',
    userName: 'admin',
    password: 'admin'
});
var angeloocana = new _User2.default({
    displayName: 'Ângelo Ocanã',
    userName: 'angeloocana',
    email: 'angeloocana@gmail.com',
    password: 'admin'
});
var alanmarcell = new _User2.default({
    displayName: 'Alan Marcell',
    userName: 'alanmarcell',
    email: 'alanmarcell@live.com',
    password: 'admin'
});
var allUsers = [admin, angeloocana, alanmarcell];
exports.admin = admin;
exports.angeloocana = angeloocana;
exports.alanmarcell = alanmarcell;
exports.allUsers = allUsers;
//# sourceMappingURL=users.js.map