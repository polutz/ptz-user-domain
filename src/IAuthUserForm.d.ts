import { IHaveValidation, IHaveValidationArgs } from 'ptz-validations';

export interface IAuthUserForm extends IHaveValidation {
    userNameOrEmail: string;
    password: string;
}

export interface IAuthUserFormArgs extends IHaveValidationArgs {
    userNameOrEmail: string;
    password: string;
}
