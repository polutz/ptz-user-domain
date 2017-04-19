'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.validateEmail = validateEmail;
exports.validateUserName = validateUserName;
exports.validatePassword = validatePassword;

var _ptzCoreDomain = require('ptz-core-domain');

var _EntityBase2 = require('./EntityBase');

var _EntityBase3 = _interopRequireDefault(_EntityBase2);

var _errors = require('./errors');

var _errors2 = _interopRequireDefault(_errors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = function (_EntityBase) {
    _inherits(User, _EntityBase);

    function User(user) {
        _classCallCheck(this, User);

        if (!user) throw _errors2.default.ERROR_EMPTY_USER;

        var _this = _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this, user));

        _this.userName = user.userName;
        _this.email = user.email;
        _this.emailConfirmed = user.emailConfirmed;
        _this.displayName = user.displayName;
        _this.imgUrl = user.imgUrl;
        _this.password = user.password;
        _this.passwordHash = user.passwordHash;
        _this.isValid();
        return _this;
    }

    _createClass(User, [{
        key: 'isValid',
        value: function isValid() {
            this._validateUserName();
            this._validateEmail();
            this._validatePassword();
            return _get(User.prototype.__proto__ || Object.getPrototypeOf(User.prototype), 'isValid', this).call(this);
        }
    }, {
        key: 'otherUsersWithSameUserNameOrEmail',
        value: function otherUsersWithSameUserNameOrEmail(otherUsers) {
            var _this2 = this;

            if (!otherUsers) return false;
            var error = false;
            if (otherUsers.filter(function (user) {
                return user.userName === _this2.userName;
            }).length > 0) {
                this.addError(_errors2.default.ERROR_USER_USERNAME_IN_USE);
                error = true;
            }
            if (otherUsers.filter(function (user) {
                return user.email === _this2.email;
            }).length > 0) {
                this.addError(_errors2.default.ERROR_USER_EMAIL_IN_USE);
                error = true;
            }
            return error;
        }
    }, {
        key: 'update',
        value: function update(newUser) {
            this.userName = newUser.userName;
            this.email = newUser.email;
            this.passwordHash = newUser.passwordHash;
            this.displayName = newUser.displayName;
            this.imgUrl = newUser.imgUrl;
            this.dtChanged = new Date();
            return this;
        }
    }, {
        key: '_validateUserName',
        value: function _validateUserName() {
            var validation = validateUserName(this.userName);
            this.addErrors(validation.errors);
            this.userName = validation.data;
        }
    }, {
        key: '_validateEmail',
        value: function _validateEmail() {
            var validation = validateEmail(this.email);
            this.addErrors(validation.errors);
            this.email = validation.data;
        }
    }, {
        key: '_validatePassword',
        value: function _validatePassword() {
            var validation = validatePassword(this.password);
            this.addErrors(validation.errors);
        }
    }]);

    return User;
}(_EntityBase3.default);

exports.default = User;

User.userNameMinLength = 3;
User.userNameMaxLength = 30;
User.passwordMinLength = 6;
User.passwordMaxLength = 30;
User.userNameErrors = [_errors2.default.ERROR_USER_USERNAME_IN_USE, _errors2.default.ERROR_USER_USERNAME_REQUIRED, _errors2.default.ERROR_USER_USERNAME_MAXLENGTH, _errors2.default.ERROR_USER_USERNAME_MINLENGTH];
User.emailErrors = [_errors2.default.ERROR_USER_EMAIL_IN_USE, _errors2.default.ERROR_USER_EMAIL_INVALID, _errors2.default.ERROR_USER_EMAIL_REQUIRED];
User.displayNameErrors = [];
User.passwordErrors = [_errors2.default.ERROR_USER_PASSWORD_MAXLENGTH, _errors2.default.ERROR_USER_PASSWORD_MINLENGTH];
function validateEmail(email) {
    var errors = (0, _ptzCoreDomain.validate)({
        data: email,
        requiredError: _errors2.default.ERROR_USER_EMAIL_REQUIRED
    });
    if (email != null) {
        email = email.toLowerCase();
        if (!(0, _ptzCoreDomain.validateEmail)(email)) errors.push(_errors2.default.ERROR_USER_EMAIL_INVALID);
    }
    return {
        data: email,
        errors: errors
    };
}
function validateUserName(userName) {
    var errors = (0, _ptzCoreDomain.validate)({
        data: userName,
        requiredError: _errors2.default.ERROR_USER_USERNAME_REQUIRED,
        maxLength: User.userNameMaxLength,
        maxLengthError: _errors2.default.ERROR_USER_USERNAME_MAXLENGTH,
        minLength: User.userNameMinLength,
        minLengthError: _errors2.default.ERROR_USER_USERNAME_MINLENGTH
    });
    if (userName != null) userName = userName.toLowerCase();
    return {
        data: userName,
        errors: errors
    };
}
function validatePassword(password) {
    var errors = (0, _ptzCoreDomain.validate)({
        data: password,
        maxLength: User.passwordMaxLength,
        maxLengthError: _errors2.default.ERROR_USER_PASSWORD_MAXLENGTH,
        minLength: User.passwordMinLength,
        minLengthError: _errors2.default.ERROR_USER_PASSWORD_MINLENGTH
    });
    return {
        data: password,
        errors: errors
    };
}
//# sourceMappingURL=User.js.map