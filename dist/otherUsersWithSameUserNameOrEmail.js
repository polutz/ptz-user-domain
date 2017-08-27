'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.otherUsersWithSameUserNameOrEmail = undefined;

var _ptzValidations = require('ptz-validations');

var V = _interopRequireWildcard(_ptzValidations);

var _allErrors = require('./allErrors');

var _allErrors2 = _interopRequireDefault(_allErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Add error to user.errors when there is other users with same userName or email.
 * @param user current user.
 * @param otherUsers other users with same userName or email.
 */
const otherUsersWithSameUserNameOrEmail = exports.otherUsersWithSameUserNameOrEmail = (user, otherUsers) => {
    if (!otherUsers) return user;
    const addError = V.addError(user);
    if (otherUsers.filter(otherUser => otherUser.userName === user.userName).length > 0) return addError('userName', _allErrors2.default.ERROR_USER_USERNAME_IN_USE);
    if (otherUsers.filter(otherUser => otherUser.email === user.email).length > 0) return addError('email', _allErrors2.default.ERROR_USER_EMAIL_IN_USE);
    return user;
};
//# sourceMappingURL=otherUsersWithSameUserNameOrEmail.js.map
//# sourceMappingURL=otherUsersWithSameUserNameOrEmail.js.map