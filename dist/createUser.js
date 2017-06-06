'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.otherUsersWithSameUserNameOrEmail = exports.createUser = exports.getPasswordValidation = exports.userNameValidation = undefined;

var _ptzValidations = require('ptz-validations');

var V = _interopRequireWildcard(_ptzValidations);

var _allErrors = require('./allErrors');

var _allErrors2 = _interopRequireDefault(_allErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var userNameValidation = exports.userNameValidation = V.validateString({
    required: true,
    minLength: 3,
    maxLength: 30,
    toLowerCase: true
});
var getPasswordValidation = exports.getPasswordValidation = function getPasswordValidation(required) {
    return V.validateString({
        required: required,
        minLength: 6,
        maxLength: 30
    });
};
/**
 * Create user
 */
var createUser = exports.createUser = V.validate({
    displayName: V.validateString({
        required: true,
        minLength: 2,
        maxLength: 50
    }),
    userName: userNameValidation,
    password: getPasswordValidation(false),
    email: V.validateEmail({
        required: true
    })
});
// TODO: rewrite
var otherUsersWithSameUserNameOrEmail = exports.otherUsersWithSameUserNameOrEmail = function otherUsersWithSameUserNameOrEmail(user, otherUsers) {
    if (!otherUsers) return user;
    var addError = V.addError(user);
    if (otherUsers.filter(function (otherUser) {
        return otherUser.userName === user.userName;
    }).length > 0) return addError('userName', _allErrors2.default.ERROR_USER_USERNAME_IN_USE);
    if (otherUsers.filter(function (otherUser) {
        return otherUser.email === user.email;
    }).length > 0) return addError('email', _allErrors2.default.ERROR_USER_EMAIL_IN_USE);
    return user;
};
//# sourceMappingURL=createUser.js.map
//# sourceMappingURL=createUser.js.map