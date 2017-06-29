import * as V from '@alanmarcell/ptz-validations';
import R from 'ramda';
import { otherUsersWithSameUserNameOrEmail } from './otherUsersWithSameUserNameOrEmail';
import { updateUser as update } from './updateUser';
export const getPasswordValidation = (required) => {
    if (required)
        return [
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
export const userNameValidation = [
    V.required,
    V.isString,
    V.min(4),
    V.max(40),
    V.toLowerCase
];
const createUserValidation = {
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
export const validateUser = V.validate(createUserValidation);
const addUserFunctions = (validUserArgs) => R.merge({
    update,
    otherUsersWithSameUserNameOrEmail
}, validUserArgs);
/**
 * Create user
 */
export const createUser = R.compose(addUserFunctions, validateUser);
//# sourceMappingURL=createUser.js.map