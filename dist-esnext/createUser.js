import * as V from 'ptz-validations';
export const userNameValidation = V.validateString({
    required: true,
    minLength: 3,
    maxLength: 30,
    toLowerCase: true
});
export const getPasswordValidation = (required) => V.validateString({
    required,
    minLength: 6,
    maxLength: 30
});
/**
 * Create user
 */
export const createUser = V.validate({
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
//# sourceMappingURL=createUser.js.map