import { HaveValidation, validateEmail, validateString } from 'ptz-validations';
import { User } from './User';
export class AuthUserForm extends HaveValidation {
    constructor(args) {
        super(args);
        args = this.validate(AuthUserForm.validations, args);
        this.userNameOrEmail = args.userNameOrEmail;
        this.password = args.password;
    }
}
AuthUserForm.validations = {
    password: validateString(Object.assign({}, User.validations.password.propValidation, {
        required: true
    })),
    userNameOrEmail: validateUserNameOrEmail(Object.assign({}, User.validations.userName.propValidation, {
        required: true
    }))
};
export function validateUserNameOrEmail(propValidation) {
    function validate(context) {
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
//# sourceMappingURL=AuthUserForm.js.map