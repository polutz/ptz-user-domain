import { EntityBase, validateEmail } from 'ptz-core-domain';
import errors from './errors';
export default class User extends EntityBase {
    constructor(user) {
        if (!user)
            throw errors.ERROR_EMPTY_USER;
        super(user);
        this.userName = user.userName;
        this.email = user.email;
        this.emailConfirmed = user.emailConfirmed;
        this.displayName = user.displayName;
        this.imgUrl = user.imgUrl;
        this.password = user.password;
        this.passwordHash = user.passwordHash;
        this.isValid();
    }
    static getUserAthenticationError(userNameOrEmail) {
        return new User({
            displayName: '',
            email: '',
            errors: [errors.ERROR_USER_INVALID_USERNAME_OR_PASSWORD],
            userName: userNameOrEmail,
        });
    }
    isValid() {
        this.validateUserName();
        this.validateEmail();
        return super.isValid();
    }
    otherUsersWithSameUserNameOrEmail(otherUsers) {
        if (!otherUsers)
            return false;
        var error = false;
        if (otherUsers.filter(user => user.userName === this.userName).length > 0) {
            this.addError(errors.ERROR_USER_USERNAME_IN_USE);
            error = true;
        }
        if (otherUsers.filter(user => user.email === this.email).length > 0) {
            this.addError(errors.ERROR_USER_EMAIL_IN_USE);
            error = true;
        }
        return error;
    }
    update(newUser) {
        this.userName = newUser.userName;
        this.email = newUser.email;
        this.passwordHash = newUser.passwordHash;
        this.displayName = newUser.displayName;
        this.imgUrl = newUser.imgUrl;
        this.dtChanged = new Date();
        return this;
    }
    validateUserName() {
        if (!this.userName || this.userName.length < 3)
            this.addError(errors.ERROR_USER_USERNAME_REQUIRED);
        else
            this.userName = this.userName.toLowerCase();
    }
    validateEmail() {
        if (!this.email)
            this.addError(errors.ERROR_USER_EMAIL_REQUIRED);
        else if (!validateEmail(this.email))
            this.addError(errors.ERROR_USER_EMAIL_INVALID);
        else
            this.email = this.email.toLowerCase();
    }
}
User.userNameErrors = [
    errors.ERROR_USER_USERNAME_IN_USE,
    errors.ERROR_USER_USERNAME_REQUIRED
];
User.emailErrors = [
    errors.ERROR_USER_EMAIL_IN_USE,
    errors.ERROR_USER_EMAIL_INVALID,
    errors.ERROR_USER_EMAIL_REQUIRED
];
User.displayNameErrors = [];
User.passwordErrors = [];
//# sourceMappingURL=User.js.map