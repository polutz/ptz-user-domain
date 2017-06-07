import * as V from 'ptz-validations';
import { IUser } from './IUser';

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
