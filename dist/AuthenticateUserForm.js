'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ptzCoreDomain = require('ptz-core-domain');

var _errors = require('./errors');

var _errors2 = _interopRequireDefault(_errors);

var _User = require('./User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AuthenticateUserForm = function (_HaveValidation) {
    _inherits(AuthenticateUserForm, _HaveValidation);

    function AuthenticateUserForm(args) {
        _classCallCheck(this, AuthenticateUserForm);

        var _this = _possibleConstructorReturn(this, (AuthenticateUserForm.__proto__ || Object.getPrototypeOf(AuthenticateUserForm)).call(this, args));

        _this.userNameOrEmail = args.userNameOrEmail;
        _this.password = args.password;
        _this.isValid();
        return _this;
    }

    _createClass(AuthenticateUserForm, [{
        key: 'isValid',
        value: function isValid() {
            this._validateUserNameOrEmail();
            this._validatePassword();
            return _get(AuthenticateUserForm.prototype.__proto__ || Object.getPrototypeOf(AuthenticateUserForm.prototype), 'isValid', this).call(this);
        }
    }, {
        key: '_validateUserNameOrEmail',
        value: function _validateUserNameOrEmail() {
            var validation = this.userNameOrEmail && this.userNameOrEmail.indexOf('@') >= 0 ? (0, _User.validateEmail)(this.userNameOrEmail) : (0, _User.validateUserName)(this.userNameOrEmail);
            this.addErrors(validation.errors);
            this.userNameOrEmail = validation.data;
        }
    }, {
        key: '_validatePassword',
        value: function _validatePassword() {
            this.addErrors((0, _ptzCoreDomain.validate)({
                data: this.password,
                requiredError: _errors2.default.ERRORS_AUTHENTICATEUSERFORM_PASSWORD_REQUIRED
            }));
            var validation = (0, _User.validatePassword)(this.password);
            this.addErrors(validation.errors);
        }
    }]);

    return AuthenticateUserForm;
}(_ptzCoreDomain.HaveValidation);

exports.default = AuthenticateUserForm;

AuthenticateUserForm.userNameOrEmailErrors = [].concat(_toConsumableArray(_User2.default.userNameErrors), _toConsumableArray(_User2.default.emailErrors));
AuthenticateUserForm.passwordErrors = [_errors2.default.ERRORS_AUTHENTICATEUSERFORM_PASSWORD_REQUIRED].concat(_toConsumableArray(_User2.default.passwordErrors));
//# sourceMappingURL=AuthenticateUserForm.js.map