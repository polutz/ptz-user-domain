'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ptzCoreDomain = require('ptz-core-domain');

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
            this.validateUserName();
            this.validateEmail();
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
        key: 'validateUserName',
        value: function validateUserName() {
            if (!this.userName || this.userName.length < 3) this.addError(_errors2.default.ERROR_USER_USERNAME_REQUIRED);else this.userName = this.userName.toLowerCase();
        }
    }, {
        key: 'validateEmail',
        value: function validateEmail() {
            if (!this.email) this.addError(_errors2.default.ERROR_USER_EMAIL_REQUIRED);else if (!(0, _ptzCoreDomain.validateEmail)(this.email)) this.addError(_errors2.default.ERROR_USER_EMAIL_INVALID);else this.email = this.email.toLowerCase();
        }
    }], [{
        key: 'getUserAthenticationError',
        value: function getUserAthenticationError(userNameOrEmail) {
            return new User({
                displayName: '',
                email: '',
                errors: [_errors2.default.ERROR_USER_INVALID_USERNAME_OR_PASSWORD],
                userName: userNameOrEmail
            });
        }
    }]);

    return User;
}(_ptzCoreDomain.EntityBase);

exports.default = User;

User.userNameErrors = [_errors2.default.ERROR_USER_USERNAME_IN_USE, _errors2.default.ERROR_USER_USERNAME_REQUIRED];
User.emailErrors = [_errors2.default.ERROR_USER_EMAIL_IN_USE, _errors2.default.ERROR_USER_EMAIL_INVALID, _errors2.default.ERROR_USER_EMAIL_REQUIRED];
User.displayNameErrors = [];
User.passwordErrors = [];