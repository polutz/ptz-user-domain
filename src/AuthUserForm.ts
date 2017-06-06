import * as V from 'ptz-validations';
import R from 'ramda';
import { getPasswordValidation, userNameValidation } from './createUser';
import { IAuthUserForm } from './IAuthUserForm';

/**
 * Validate UserName or E-mail to login.
 */
export const validateUserNameOrEmail = R.curry((opts: V.IStringValidation, propName, obj) => {
    const propValue = R.prop<string>(propName, obj);

    return propValue.indexOf('@') >= 0
        ? V.validateEmail(opts, propName, obj)
        : userNameValidation(propName, obj);
});

/**
 * Authenticate User Form.
 */
export const authUserForm = V.validate<IAuthUserForm>({
    userNameOrEmail: validateUserNameOrEmail({
        required: true,
    }),
    password: getPasswordValidation(true)
});
