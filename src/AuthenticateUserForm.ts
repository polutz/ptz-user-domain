import { HaveValidation, IStringValidation, validateEmail, validateString } from 'ptz-validations';
import allErrors from './allErrors';
import { IAuthenticateUserForm, IAuthenticateUserFormArgs } from './IAuthenticateUserForm';
import User from './User';

export default class AuthenticateUserForm extends HaveValidation implements IAuthenticateUserForm {

    static passwordValidation: IStringValidation = {
        required: true,
        minLength: User.passwordValidation.minLength,
        maxLength: User.passwordValidation.maxLength
    };

    userNameOrEmail: string;
    password: string;

    constructor(args: IAuthenticateUserFormArgs) {
        super(args);

        this.setUserNameOrEmail(args.userNameOrEmail);
        this.setPassword(args.password);
    }

    private setUserNameOrEmail(userNameOrEmail: string) {
        if (userNameOrEmail && userNameOrEmail.indexOf('@') >= 0)
            this.addErrors(validateEmail({
                data: userNameOrEmail,
                propName: 'userNameOrEmail',
                propValidation: User.emailValidation
            }));
        else
            this.addErrors(validateString({
                data: userNameOrEmail,
                propName: 'userNameOrEmail',
                propValidation: User.userNameValidation
            }));

        if (userNameOrEmail != null)
            this.userNameOrEmail = userNameOrEmail.toLowerCase();
    }

    private setPassword(password: string) {
        this.addErrors(validateString({
            data: password,
            propName: 'password',
            propValidation: AuthenticateUserForm.passwordValidation
        }));

        this.password = password;
    }
}

export {
    AuthenticateUserForm
};
