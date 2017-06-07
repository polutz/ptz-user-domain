'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createUser = exports.getPasswordValidation = exports.userNameValidation = undefined;

var _ptzValidations = require('ptz-validations');

var V = _interopRequireWildcard(_ptzValidations);

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
//# sourceMappingURL=createUser.js.map
//# sourceMappingURL=createUser.js.map