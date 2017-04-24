import { IHaveValidation, IHaveValidationArgs } from 'ptz-validations';

export interface IAuthenticateUserForm extends IHaveValidation {
    userNameOrEmail: string;
    password: string;
}

export interface IAuthenticateUserFormArgs extends IHaveValidationArgs {
    userNameOrEmail: string;
    password: string;
}
