import { IHaveValidation } from 'ptz-core-domain';

export interface IAuthenticateUserForm extends IHaveValidation {
    userNameOrEmail: string;
    password: string;
}

export interface IAuthenticateUserFormArgs {
    userNameOrEmail: string;
    password: string;
    errors?: string[];
}
