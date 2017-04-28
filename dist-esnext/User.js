import { validateEmail, validateString } from 'ptz-validations';
import allErrors from './allErrors';
import EntityBase from './EntityBase';
export class User extends EntityBase {
    constructor(args) {
        if (!args)
            throw allErrors.ERROR_EMPTY_USER;
        super(args);
        args = this.validate(User.validations, args);
        this.userName = args.userName;
        this.email = args.email;
        this.displayName = args.displayName;
        this.password = args.password;
        this.emailConfirmed = args.emailConfirmed;
        this.imgUrl = args.imgUrl;
        this.passwordHash = args.passwordHash;
    }
    otherUsersWithSameUserNameOrEmail(otherUsers) {
        if (!otherUsers)
            return false;
        var hasError = false;
        if (otherUsers.filter(user => user.userName === this.userName).length > 0) {
            this.addError({
                propName: 'userName',
                errorMsg: allErrors.ERROR_USER_USERNAME_IN_USE
            });
            hasError = true;
        }
        if (otherUsers.filter(user => user.email === this.email).length > 0) {
            this.addError({
                propName: 'email',
                errorMsg: allErrors.ERROR_USER_EMAIL_IN_USE
            });
            hasError = true;
        }
        return hasError;
    }
    update(newUser) {
        this.userName = newUser.userName;
        this.email = newUser.email;
        this.displayName = newUser.displayName;
        this.passwordHash = newUser.passwordHash;
        this.imgUrl = newUser.imgUrl;
        this.dtChanged = new Date();
        return this;
    }
}
User.validations = {
    displayName: validateString({
        required: true,
        minLength: 2,
        maxLength: 50
    }),
    userName: validateString({
        required: true,
        minLength: 3,
        maxLength: 30,
        toLowerCase: true
    }),
    password: validateString({
        required: false,
        minLength: 6,
        maxLength: 30
    }),
    email: validateEmail({
        required: true
    })
};
//# sourceMappingURL=User.js.map