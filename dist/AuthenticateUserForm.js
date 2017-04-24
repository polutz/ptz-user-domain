'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AuthenticateUserForm = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ptzValidations = require('ptz-validations');

var _User = require('./User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AuthenticateUserForm = function (_HaveValidation) {
    _inherits(AuthenticateUserForm, _HaveValidation);

    function AuthenticateUserForm(args) {
        _classCallCheck(this, AuthenticateUserForm);

        var _this = _possibleConstructorReturn(this, (AuthenticateUserForm.__proto__ || Object.getPrototypeOf(AuthenticateUserForm)).call(this, args));

        _this.setUserNameOrEmail(args.userNameOrEmail);
        _this.setPassword(args.password);
        return _this;
    }

    _createClass(AuthenticateUserForm, [{
        key: 'setUserNameOrEmail',
        value: function setUserNameOrEmail(userNameOrEmail) {
            if (userNameOrEmail && userNameOrEmail.indexOf('@') >= 0) this.addErrors((0, _ptzValidations.validateEmail)({
                data: userNameOrEmail,
                propName: 'userNameOrEmail',
                propValidation: _User2.default.emailValidation
            }));else this.addErrors((0, _ptzValidations.validateString)({
                data: userNameOrEmail,
                propName: 'userNameOrEmail',
                propValidation: _User2.default.userNameValidation
            }));
            if (userNameOrEmail != null) this.userNameOrEmail = userNameOrEmail.toLowerCase();
        }
    }, {
        key: 'setPassword',
        value: function setPassword(password) {
            this.addErrors((0, _ptzValidations.validateString)({
                data: password,
                propName: 'password',
                propValidation: AuthenticateUserForm.passwordValidation
            }));
            this.password = password;
        }
    }]);

    return AuthenticateUserForm;
}(_ptzValidations.HaveValidation);

exports.default = AuthenticateUserForm;

AuthenticateUserForm.passwordValidation = {
    required: true,
    minLength: _User2.default.passwordValidation.minLength,
    maxLength: _User2.default.passwordValidation.maxLength
};
exports.AuthenticateUserForm = AuthenticateUserForm;
//# sourceMappingURL=AuthenticateUserForm.js.map