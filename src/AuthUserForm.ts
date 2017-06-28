import * as V from '@alanmarcell/ptz-validations';
import R from 'ramda';
import { getPasswordValidation, userNameValidation } from './createUser';
import { IAuthUserForm } from './IAuthUserForm';

/**
 * Validate UserName or E-mail to login.
 */
export const validateUserNameOrEmail = R.curry((propName: string, obj: any) => {

    const propValue = R.prop<string>(propName, obj);

    const createUserValidation: V.IValidations = { userNameOrEmail: userNameValidation };

    return propValue.indexOf('@') >= 0
        ? V.isEmail(propName, obj)
        : V.validate(createUserValidation)(obj);
});

/**
 * Authenticate User Form.
 */
export const authUserForm = V.validate<IAuthUserForm>({
    userNameOrEmail: [validateUserNameOrEmail],
    //     userNameOrEmail: validateUserNameOrEmail({
    //     required: true,
    // }),
    password: getPasswordValidation(true)
});
