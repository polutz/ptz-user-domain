import {
    HaveValidation, IStringValidation, IValidateContext, IValidateResult, IValidations,
    validateEmail, validateString
} from 'ptz-validations';
import allErrors from './allErrors';
import { IAuthenticateUserForm, IAuthenticateUserFormArgs } from './IAuthenticateUserForm';
import { User } from './User';

export class AuthenticateUserForm extends HaveValidation implements IAuthenticateUserForm {

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

    constructor(args: IAuthenticateUserFormArgs) {
        super(args);

        args = this.validate(AuthenticateUserForm.validations, args);

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
