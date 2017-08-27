'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.authUserForm = exports.validateUserNameOrEmail = undefined;

var _ptzValidations = require('ptz-validations');

var V = _interopRequireWildcard(_ptzValidations);

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _createUser = require('./createUser');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Validate UserName or E-mail to login.
 */
const validateUserNameOrEmail = exports.validateUserNameOrEmail = _ramda2.default.curry((propName, obj) => {
    const propValue = _ramda2.default.prop(propName, obj);
    const createUserValidation = { userNameOrEmail: _createUser.userNameValidation };
    return propValue.indexOf('@') >= 0 ? V.isEmail(propName, obj) : V.validate(createUserValidation)(obj);
});
/**
 * Authenticate User Form.
 */
const authUserForm = exports.authUserForm = V.validate({
    userNameOrEmail: [validateUserNameOrEmail],
    password: (0, _createUser.getPasswordValidation)(true)
});
//# sourceMappingURL=AuthUserForm.js.map
//# sourceMappingURL=AuthUserForm.js.map