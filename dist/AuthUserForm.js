'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AuthUserForm = undefined;
exports.validateUserNameOrEmail = validateUserNameOrEmail;

var _ptzValidations = require('ptz-validations');

var _User = require('./User');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AuthUserForm = exports.AuthUserForm = function (_HaveValidation) {
    _inherits(AuthUserForm, _HaveValidation);

    function AuthUserForm(args) {
        _classCallCheck(this, AuthUserForm);

        var _this = _possibleConstructorReturn(this, (AuthUserForm.__proto__ || Object.getPrototypeOf(AuthUserForm)).call(this, args));

        args = _this.validate(AuthUserForm.validations, args);
        _this.userNameOrEmail = args.userNameOrEmail;
        _this.password = args.password;
        return _this;
    }

    return AuthUserForm;
}(_ptzValidations.HaveValidation);

AuthUserForm.validations = {
    password: (0, _ptzValidations.validateString)(Object.assign({}, _User.User.validations.password.propValidation, {
        required: true
    })),
    userNameOrEmail: validateUserNameOrEmail(Object.assign({}, _User.User.validations.userName.propValidation, {
        required: true
    }))
};
function validateUserNameOrEmail(propValidation) {
    function validate(context) {
        if (context.data && context.data.indexOf('@') >= 0) context = (0, _ptzValidations.validateEmail)(propValidation).validate(context);else context = (0, _ptzValidations.validateString)(propValidation).validate(context);
        return context;
    }
    return {
        validate: validate,
        propValidation: propValidation
    };
}
//# sourceMappingURL=AuthUserForm.js.map
//# sourceMappingURL=AuthUserForm.js.map