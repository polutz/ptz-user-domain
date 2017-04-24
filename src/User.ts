import { IEmailValidation, IError, IStringValidation, validateEmail, validateString } from 'ptz-validations';
import allErrors from './allErrors';
import EntityBase from './EntityBase';
import { IUser, IUserArgs } from './IUser';

export default class User extends EntityBase implements IUser {

    static displayNameValidation: IStringValidation = {
        required: true,
        minLength: 2,
        maxLength: 50
    };

    static userNameValidation: IStringValidation = {
        required: true,
        minLength: 3,
        maxLength: 30
    };

    static passwordValidation: IStringValidation = {
        required: false,
        minLength: 6,
        maxLength: 30
    };

    static emailValidation: IEmailValidation = {
        required: true
    };

    userName: string;
    email: string;
    emailConfirmed?: boolean;
    displayName: string;
    imgUrl?: string;
    password?: string;
    passwordHash?: string;

    constructor(user: IUserArgs) {
        if (!user)
            throw allErrors.ERROR_EMPTY_USER;

        super(user);

        // create set when prop need validation
        this.setUserName(user.userName);
        this.setEmail(user.email);
        this.setDisplayName(user.displayName);
        this.setPassword(user.password);

        this.emailConfirmed = user.emailConfirmed;
        this.imgUrl = user.imgUrl;
        this.passwordHash = user.passwordHash;
    }

    otherUsersWithSameUserNameOrEmail(otherUsers: IUserArgs[]): boolean {
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

    update(newUser: IUser): IUser {
        this.setUserName(newUser.userName);
        this.setEmail(newUser.email);
        this.setDisplayName(newUser.displayName);

        this.passwordHash = newUser.passwordHash;
        this.imgUrl = newUser.imgUrl;
        this.dtChanged = new Date();
        return this;
    }

    private setDisplayName(displayName: string) {
        this.addErrors(validateString({
            data: displayName,
            propName: 'displayName',
            propValidation: User.displayNameValidation
        }));

        this.displayName = displayName;
    }

    private setUserName(userName: string) {
        this.addErrors(validateString({
            data: userName,
            propName: 'userName',
            propValidation: User.userNameValidation
        }));

        if (userName != null)
            this.userName = userName.toLowerCase();
    }

    private setEmail(email: string) {
        this.addErrors(validateEmail({
            data: email,
            propName: 'email',
            propValidation: User.emailValidation
        }));

        if (email != null)
            this.email = email.toLowerCase();
    }

    private setPassword(password: string) {
        this.addErrors(validateString({
            data: password,
            propName: 'password',
            propValidation: User.passwordValidation
        }));

        this.password = password;
    }
}

export {
    User
};
