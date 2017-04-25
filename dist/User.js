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

var User = exports.User = function (_EntityBase) {
    _inherits(User, _EntityBase);

    function User(args) {
        _classCallCheck(this, User);

        if (!args) throw _allErrors2.default.ERROR_EMPTY_USER;

        var _this = _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this, args));

        args = _this.validate(User.validations, args);
        _this.userName = args.userName;
        _this.email = args.email;
        _this.displayName = args.displayName;
        _this.password = args.password;
        _this.emailConfirmed = args.emailConfirmed;
        _this.imgUrl = args.imgUrl;
        _this.passwordHash = args.passwordHash;
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
            this.userName = newUser.userName;
            this.email = newUser.email;
            this.displayName = newUser.displayName;
            this.passwordHash = newUser.passwordHash;
            this.imgUrl = newUser.imgUrl;
            this.dtChanged = new Date();
            return this;
        }
    }]);

    return User;
}(_EntityBase3.default);

User.validations = {
    displayName: (0, _ptzValidations.validateString)({
        required: true,
        minLength: 2,
        maxLength: 50
    }),
    userName: (0, _ptzValidations.validateString)({
        required: true,
        minLength: 3,
        maxLength: 30,
        toLowerCase: true
    }),
    password: (0, _ptzValidations.validateString)({
        required: false,
        minLength: 6,
        maxLength: 30
    }),
    email: (0, _ptzValidations.validateEmail)({
        required: true
    })
};
//# sourceMappingURL=User.js.map
//# sourceMappingURL=User.js.map