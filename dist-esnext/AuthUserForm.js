import * as V from 'ptz-validations';
import R from 'ramda';
import { getPasswordValidation, userNameValidation } from './createUser';
/**
 * Validate UserName or E-mail to login.
 */
export const validateUserNameOrEmail = R.curry((opts, propName, obj) => {
    const propValue = R.prop(propName, obj);
    return propValue.indexOf('@') >= 0
        ? V.validateEmail(opts, propName, obj)
        : userNameValidation(propName, obj);
});
/**
 * Authenticate User Form.
 */
export const authUserForm = V.validate({
    userNameOrEmail: validateUserNameOrEmail({
        required: true,
    }),
    password: getPasswordValidation(true)
});
//# sourceMappingURL=AuthUserForm.js.map