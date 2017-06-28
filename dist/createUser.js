'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createUser = exports.userNameValidation = exports.getPasswordValidation = undefined;

var _ptzValidations = require('@alanmarcell/ptz-validations');

var V = _interopRequireWildcard(_ptzValidations);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var getPasswordValidation = exports.getPasswordValidation = function getPasswordValidation(required) {
    if (required) return [V.required, V.isString, V.min(6), V.max(40)];
    return [V.isString, V.min(6), V.max(40)];
};
var userNameValidation = exports.userNameValidation = [V.required, V.isString, V.min(2), V.max(40), V.toLowerCase];
var createUserValidation = {
    id: [V.generateId],
    displayName: [V.required, V.isString, V.min(2), V.max(100)],
    userName: userNameValidation,
    password: getPasswordValidation(false),
    email: [V.required, V.isEmail],
    weight: [V.isNumber, V.min(1), V.max(1000)],
    birthday: [V.isDate, V.min(new Date('1800-01-01')), V.max(new Date())]
};
/**
 * Create user
 */
var createUser = exports.createUser = V.validate(createUserValidation);
//# sourceMappingURL=createUser.js.map
//# sourceMappingURL=createUser.js.map