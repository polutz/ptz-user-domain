import * as V from '@alanmarcell/ptz-validations';
import { IUser } from './IUser';

// export const userNameValidation = V.validateString({
//     required: true,
//     minLength: 3,
//     maxLength: 30,
//     toLowerCase: true
// });

// export const getPasswordValidation = (required: boolean) => V.validateString({
//     required,
//     minLength: 6,
//     maxLength: 30
// });

/**
 * Create user
 */
export const createUser = V.validate<IUser>({
    id: [
        V.generateId
    ],
    displayName: [
        V.required,
        V.isString,
        V.min(2),
        V.max(100)
    ],
    userName: [
        V.required,
        V.isString,
        V.min(2),
        V.max(40),
        V.toLowerCase
    ],
    password: [
        V.required,
        V.isString,
        V.min(6),
        V.max(40)
    ],
    email: [
        V.required,
        V.isEmail
    ],
    weight: [
        V.isNumber,
        V.min(1),
        V.max(1000)
    ],
    birthday: [
        V.isDate,
        V.min(new Date('1800-01-01')),
        V.max(new Date())
    ]
});
