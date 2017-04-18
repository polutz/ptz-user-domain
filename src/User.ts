import { IValidate, validate, validateEmail as isValidEmail } from 'ptz-core-domain';
import EntityBase from './EntityBase';
import allErrors from './errors';
import { IUser, IUserArgs } from './IUser';

export default class User extends EntityBase implements IUser {

    static userNameMinLength = 3;
    static userNameMaxLength = 30;

    static passwordMinLength = 6;
    static passwordMaxLength = 30;

    static userNameErrors = [
        allErrors.ERROR_USER_USERNAME_IN_USE,
        allErrors.ERROR_USER_USERNAME_REQUIRED,
        allErrors.ERROR_USER_USERNAME_MAXLENGTH,
        allErrors.ERROR_USER_USERNAME_MINLENGTH];

    static emailErrors = [
        allErrors.ERROR_USER_EMAIL_IN_USE,
        allErrors.ERROR_USER_EMAIL_INVALID,
        allErrors.ERROR_USER_EMAIL_REQUIRED];

    static displayNameErrors = [];

    static passwordErrors = [
        allErrors.ERROR_USER_PASSWORD_MAXLENGTH,
        allErrors.ERROR_USER_PASSWORD_MINLENGTH
    ];

    static getUserAthenticationError(userNameOrEmail: string): IUser {
        return new User({
            displayName: '',
            email: '',
            errors: [allErrors.ERROR_USER_INVALID_USERNAME_OR_PASSWORD],
            userName: userNameOrEmail,
        });
    }

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

        this.userName = user.userName;
        this.email = user.email;
        this.emailConfirmed = user.emailConfirmed;
        this.displayName = user.displayName;
        this.imgUrl = user.imgUrl;
        this.password = user.password;
        this.passwordHash = user.passwordHash;

        this.isValid();
    }

    isValid(): boolean {
        this._validateUserName();
        this._validateEmail();
        this._validatePassword();

        return super.isValid();
    }

    otherUsersWithSameUserNameOrEmail(otherUsers: IUserArgs[]): boolean {
        if (!otherUsers)
            return false;

        var error = false;

        if (otherUsers.filter(user => user.userName === this.userName).length > 0) {
            this.addError(allErrors.ERROR_USER_USERNAME_IN_USE);
            error = true;
        }

        if (otherUsers.filter(user => user.email === this.email).length > 0) {
            this.addError(allErrors.ERROR_USER_EMAIL_IN_USE);
            error = true;
        }

        return error;
    }

    update(newUser: IUser): IUser {
        this.userName = newUser.userName;
        this.email = newUser.email;
        this.passwordHash = newUser.passwordHash;
        this.displayName = newUser.displayName;
        this.imgUrl = newUser.imgUrl;
        this.dtChanged = new Date();
        return this;
    }

    private _validateUserName() {
        const validation = validateUserName(this.userName);
        this.addErrors(validation.errors);
        this.userName = validation.data;
    }

    private _validateEmail() {
        const validation = validateEmail(this.email);
        this.addErrors(validation.errors);
        this.email = validation.data;
    }

    private _validatePassword() {
        const validation = validatePassword(this.password);
        this.addErrors(validation.errors);
    }
}

export function validateEmail(email: string): IValidate<string> {
    const errors = validate({
        data: email,
        requiredError: allErrors.ERROR_USER_EMAIL_REQUIRED
    });

    if (email != null) {
        email = email.toLowerCase();

        if (!isValidEmail(email))
            errors.push(allErrors.ERROR_USER_EMAIL_INVALID);
    }

    return {
        data: email,
        errors
    };
}

export function validateUserName(userName: string): IValidate<string> {
    const errors = validate({
        data: userName,
        requiredError: allErrors.ERROR_USER_USERNAME_REQUIRED,
        maxLength: User.userNameMaxLength,
        maxLengthError: allErrors.ERROR_USER_USERNAME_MAXLENGTH,
        minLength: User.userNameMinLength,
        minLengthError: allErrors.ERROR_USER_USERNAME_MINLENGTH
    });

    if (userName != null)
        userName = userName.toLowerCase();

    return {
        data: userName,
        errors
    };
}

export function validatePassword(password: string): IValidate<string> {
    const errors = validate({
        data: password,
        maxLength: User.passwordMaxLength,
        maxLengthError: allErrors.ERROR_USER_PASSWORD_MAXLENGTH,
        minLength: User.passwordMinLength,
        minLengthError: allErrors.ERROR_USER_PASSWORD_MINLENGTH
    });

    return {
        data: password,
        errors
    };
}
