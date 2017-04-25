'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.User = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ptzValidations = require('ptz-validations');

var _allErrors = require('./allErrors');

var _allErrors2 = _interopRequireDefault(_allErrors);

var _EntityBase2 = require('./EntityBase');

var _EntityBase3 = _interopRequireDefault(_EntityBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = function (_EntityBase) {
    _inherits(User, _EntityBase);

    function User(user) {
        _classCallCheck(this, User);

        if (!user) throw _allErrors2.default.ERROR_EMPTY_USER;

        // create set when prop need validation
        var _this = _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this, user));

        _this.setUserName(user.userName);
        _this.setEmail(user.email);
        _this.setDisplayName(user.displayName);
        _this.setPassword(user.password);
        _this.emailConfirmed = user.emailConfirmed;
        _this.imgUrl = user.imgUrl;
        _this.passwordHash = user.passwordHash;
        return _this;
    }

    _createClass(User, [{
        key: 'otherUsersWithSameUserNameOrEmail',
        value: function otherUsersWithSameUserNameOrEmail(otherUsers) {
            var _this2 = this;

            if (!otherUsers) return false;
            var hasError = false;
            if (otherUsers.filter(function (user) {
                return user.userName === _this2.userName;
            }).length > 0) {
                this.addError({
                    propName: 'userName',
                    errorMsg: _allErrors2.default.ERROR_USER_USERNAME_IN_USE
                });
                hasError = true;
            }
            if (otherUsers.filter(function (user) {
                return user.email === _this2.email;
            }).length > 0) {
                this.addError({
                    propName: 'email',
                    errorMsg: _allErrors2.default.ERROR_USER_EMAIL_IN_USE
                });
                hasError = true;
            }
            return hasError;
        }
    }, {
        key: 'update',
        value: function update(newUser) {
            this.setUserName(newUser.userName);
            this.setEmail(newUser.email);
            this.setDisplayName(newUser.displayName);
            this.passwordHash = newUser.passwordHash;
            this.imgUrl = newUser.imgUrl;
            this.dtChanged = new Date();
            return this;
        }
    }, {
        key: 'setDisplayName',
        value: function setDisplayName(displayName) {
            this.addErrors((0, _ptzValidations.validateString)({
                data: displayName,
                propName: 'displayName',
                propValidation: User.displayNameValidation
            }));
            this.displayName = displayName;
        }
    }, {
        key: 'setUserName',
        value: function setUserName(userName) {
            this.addErrors((0, _ptzValidations.validateString)({
                data: userName,
                propName: 'userName',
                propValidation: User.userNameValidation
            }));
            if (userName != null) this.userName = userName.toLowerCase();
        }
    }, {
        key: 'setEmail',
        value: function setEmail(email) {
            this.addErrors((0, _ptzValidations.validateEmail)({
                data: email,
                propName: 'email',
                propValidation: User.emailValidation
            }));
            if (email != null) this.email = email.toLowerCase();
        }
    }, {
        key: 'setPassword',
        value: function setPassword(password) {
            this.addErrors((0, _ptzValidations.validateString)({
                data: password,
                propName: 'password',
                propValidation: User.passwordValidation
            }));
            this.password = password;
        }
    }]);

    return User;
}(_EntityBase3.default);

exports.default = User;

User.displayNameValidation = {
    required: true,
    minLength: 2,
    maxLength: 50
};
User.userNameValidation = {
    required: true,
    minLength: 3,
    maxLength: 30
};
User.passwordValidation = {
    required: false,
    minLength: 6,
    maxLength: 30
};
User.emailValidation = {
    required: true
};
exports.User = User;
//# sourceMappingURL=User.js.map
//# sourceMappingURL=User.js.map