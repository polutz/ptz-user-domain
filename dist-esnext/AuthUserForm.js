import * as V from 'ptz-validations';
import R from 'ramda';
import { getPasswordValidation, userNameValidation } from './createUser';
/**
 * Validate UserName or E-mail to login.
 */
export const validateUserNameOrEmail = R.curry((propName, obj) => {
    const propValue = R.prop(propName, obj);
    const createUserValidation = { userNameOrEmail: userNameValidation };
    return propValue.indexOf('@') >= 0
        ? V.isEmail(propName, obj)
        : V.validate(createUserValidation)(obj);
});
/**
 * Authenticate User Form.
 */
export const authUserForm = V.validate({
    userNameOrEmail: [validateUserNameOrEmail],
    password: getPasswordValidation(true)
});
//# sourceMappingURL=AuthUserForm.js.map