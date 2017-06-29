import * as V from '@alanmarcell/ptz-validations';
import { IUser } from './IUser';

export const getPasswordValidation = (required: boolean): [V.IValidateProp] => {
    if (required) return [
        V.required,
        V.isString,
        V.min(6),
        V.max(40)
    ];
    return [
        V.isString,
        V.min(6),
        V.max(40)
    ];
};

export const userNameValidation: [V.IValidateProp] = [
    V.required,
    V.isString,
    V.min(4),
    V.max(40),
    V.toLowerCase
];

const createUserValidation: V.IValidations = {
    id: [
        V.generateId
    ],
    displayName: [
        V.required,
        V.isString,
        V.min(4),
        V.max(100)
    ],
    userName: userNameValidation,
    password: getPasswordValidation(false),
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
};
/**
 * Create user
 */
export const createUser = V.validate<IUser>(createUserValidation);
