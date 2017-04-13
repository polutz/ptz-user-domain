import { ICreatedBy } from 'ptz-core-domain';
import { Ilog } from 'ptz-log';
import { IAppFuncArgs } from './IAppFuncArgs';
import { IUser, IUserArgs } from './IUser';
import { IUserRepository } from './IUserRepository';

export interface ISaveArgs extends IAppFuncArgs {
    userArgs: IUserArgs;
}

export interface IFindArgs extends IAppFuncArgs {
    query: any;
    options: { limit: number };
}

export interface IAuthenticateUserArgs extends IAppFuncArgs {
    userNameOrEmail: string;
    password: string;
}

export type IGetAuthTokenArgs = IAuthenticateUserArgs;

export interface IVerifyAuthTokenArgs extends IAppFuncArgs {
    token: string;
}

export interface IUserApp {
    save(args: ISaveArgs): Promise<IUser>;
    find(args: IFindArgs): Promise<IUser[]>;

    authenticateUser(args: IAuthenticateUserArgs): Promise<IUser>;
    getAuthToken(args: IGetAuthTokenArgs): Promise<IUser>;
    verifyAuthToken(args: IVerifyAuthTokenArgs): Promise<IUser>;
    hashPassword(user: IUser): Promise<IUser>;
    seed();
}

export interface IUserAppArgs {
    userRepository: IUserRepository;
    log?: Ilog;
}
