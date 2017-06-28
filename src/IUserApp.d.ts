import { ICreatedBy } from '@alanmarcell/ptz-core-domain';
import { IError } from '@alanmarcell/ptz-validations';
import { ILog } from 'ptz-log';
import { IAppFuncArgs } from './IAppFuncArgs';
import { IAuthUserFormArgs } from './IAuthUserForm';
import { IUser, IUserArgs } from './IUser';
import { IUserRepository } from './IUserRepository';

export interface ISaveUserArgs extends IAppFuncArgs {
    userArgs: IUserArgs;
}

export interface IDeleteUserArgs extends IAppFuncArgs {
    id: string;
}

export interface IAuthUserArgs extends IAppFuncArgs {
    form: IAuthUserFormArgs;
}

export interface IVerifyAuthTokenArgs extends IAppFuncArgs {
    token: string;
}

export interface IForgotPasswordArgs extends IAppFuncArgs {
    userNameOrEmail: string;
}

export interface IUpdatePasswordTokenArgs extends IAppFuncArgs {
    token: string;
    newPassword: string;
}

export interface IUpdatePasswordArgs extends IAppFuncArgs {
    currentPassword: string;
    newPassword: string;
}

export interface IFindUsersArgs extends IAppFuncArgs {
    query: any;
    options: { limit: number };
}

export interface IAuthToken {
    user: IUser;
    authToken?: string;
    errors: IError[];
}

export interface IUserApp {
    saveUser(args: ISaveUserArgs): Promise<IUser>;
    findUsers(args: IFindUsersArgs): Promise<IUser[]>;

    authUser(args: IAuthUserArgs): Promise<IUser>;
    getAuthToken(args: IAuthUserArgs): Promise<IAuthToken>;
    verifyAuthToken(args: IVerifyAuthTokenArgs): Promise<IUser>;

    updatePassword(args: IUpdatePasswordArgs): Promise<boolean>;

    updatePasswordToken(args: IUpdatePasswordTokenArgs): Promise<boolean>;

    deleteUser(args: IDeleteUserArgs): Promise<boolean>;

    hashPassword(user: IUser): Promise<IUser>;
    seed();
}

export interface IUserAppArgs {
    userRepository: IUserRepository;
    log?: ILog;
}
