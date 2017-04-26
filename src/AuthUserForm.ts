import {
    HaveValidation, IStringValidation, IValidateContext, IValidateResult, IValidations,
    validateEmail, validateString
} from 'ptz-validations';
import allErrors from './allErrors';
import { IAuthUserForm, IAuthUserFormArgs } from './IAuthUserForm';
import { User } from './User';

export class AuthUserForm extends HaveValidation implements IAuthUserForm {

    static validations: IValidations = {
        password: validateString(Object.assign({}, User.validations.password.propValidation, {
            required: true
        })),
        userNameOrEmail: validateUserNameOrEmail(Object.assign({}, User.validations.userName.propValidation, {
            required: true
        }))
    };

    userNameOrEmail: string;
    password: string;

    constructor(args: IAuthUserFormArgs) {
        super(args);

        args = this.validate(AuthUserForm.validations, args);

        this.userNameOrEmail = args.userNameOrEmail;
        this.password = args.password;
    }
}

export function validateUserNameOrEmail(propValidation: IStringValidation): IValidateResult<IStringValidation, string> {
    function validate(context: IValidateContext<string>): IValidateContext<string> {

        if (context.data && context.data.indexOf('@') >= 0)
            context = validateEmail(propValidation).validate(context);
        else
            context = validateString(propValidation).validate(context);

        return context;
    }

    return {
        validate,
        propValidation
    };
}
