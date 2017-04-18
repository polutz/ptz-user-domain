import { HaveValidation, validate } from 'ptz-core-domain';
import errors from './errors';
import { IAuthenticateUserForm, IAuthenticateUserFormArgs } from './IAuthenticateUserForm';
import User, { validateEmail, validatePassword, validateUserName } from './User';

export default class AuthenticateUserForm extends HaveValidation implements IAuthenticateUserForm {
    static userNameOrEmailErrors = [
        ...User.userNameErrors,
        ...User.emailErrors
    ];

    static passwordErrors = [
        errors.ERRORS_AUTHENTICATEUSERFORM_PASSWORD_REQUIRED,
        ...User.passwordErrors];

    userNameOrEmail: string;
    password: string;

    constructor(args: IAuthenticateUserFormArgs) {
        super(args);

        this.userNameOrEmail = args.userNameOrEmail;
        this.password = args.password;

        this.isValid();
    }

    isValid(): boolean {
        this._validateUserNameOrEmail();
        this._validatePassword();

        return super.isValid();
    }

    private _validateUserNameOrEmail() {
        const validation = (this.userNameOrEmail && this.userNameOrEmail.indexOf('@') >= 0)
            ? validateEmail(this.userNameOrEmail)
            : validateUserName(this.userNameOrEmail);

        this.addErrors(validation.errors);
        this.userNameOrEmail = validation.data;
    }

    private _validatePassword() {
        this.addErrors(validate({
            data: this.password,
            requiredError: errors.ERRORS_AUTHENTICATEUSERFORM_PASSWORD_REQUIRED
        }));

        const validation = validatePassword(this.password);
        this.addErrors(validation.errors);
    }
}
