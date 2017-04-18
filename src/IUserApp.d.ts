import { ICreatedBy } from 'ptz-core-domain';
import { Ilog } from 'ptz-log';
import { IAppFuncArgs } from './IAppFuncArgs';
import { IAuthenticateUserForm } from './IAuthenticateUserForm';
import { IUser, IUserArgs } from './IUser';
import { IUserRepository } from './IUserRepository';

export interface IUserAppISaveArgs extends IAppFuncArgs {
    userArgs: IUserArgs;
}

export interface IUserAppIFindArgs extends IAppFuncArgs {
    query: any;
    options: { limit: number };
}

export interface IUserAppIAuthenticateUserArgs extends IAppFuncArgs {
    form: IAuthenticateUserForm;
}

export type IUserAppIGetAuthTokenArgs = IUserAppIAuthenticateUserArgs;

export interface IUserAppIVerifyAuthTokenArgs extends IAppFuncArgs {
    token: string;
}

export interface IUserApp {
    save(args: IUserAppISaveArgs): Promise<IUser>;
    find(args: IUserAppIFindArgs): Promise<IUser[]>;

    authenticateUser(args: IUserAppIAuthenticateUserArgs): Promise<IUser>;
    getAuthToken(args: IUserAppIGetAuthTokenArgs): Promise<IUser>;
    verifyAuthToken(args: IUserAppIVerifyAuthTokenArgs): Promise<IUser>;
    hashPassword(user: IUser): Promise<IUser>;
    seed();
}

export interface IUserAppArgs {
    userRepository: IUserRepository;
    log?: Ilog;
}
