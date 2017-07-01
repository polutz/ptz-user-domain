import * as V from 'ptz-validations';
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
/**
 * Create user
 */
export const createUser = V.validate(createUserValidation);
//# sourceMappingURL=createUser.js.map