import * as V from 'ptz-validations';
import allErrors from './allErrors';
import { IUser, IUserArgs } from './IUser';

export const userNameValidation = V.validateString({
    required: true,
    minLength: 3,
    maxLength: 30,
    toLowerCase: true
});

export const getPasswordValidation = (required: boolean) => V.validateString({
    required,
    minLength: 6,
    maxLength: 30
});

/**
 * Create user
 */
export const createUser = V.validate<IUser>({
    displayName: V.validateString({
        required: true,
        minLength: 2,
        maxLength: 50
    }),
    userName: userNameValidation,
    password: getPasswordValidation(false),
    email: V.validateEmail({
        required: true
    })
});

// TODO: rewrite
export const otherUsersWithSameUserNameOrEmail = (user: IUser, otherUsers: IUserArgs[]): IUser => {
    if (!otherUsers)
        return user;

    const addError = V.addError(user);

    if (otherUsers.filter(otherUser => otherUser.userName === user.userName).length > 0)
        return addError('userName', allErrors.ERROR_USER_USERNAME_IN_USE);

    if (otherUsers.filter(otherUser => otherUser.email === user.email).length > 0)
        return addError('email', allErrors.ERROR_USER_EMAIL_IN_USE);

    return user;
};
