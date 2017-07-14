import { IEntityBase, IEntityBaseArgs } from './IEntityBase';

export interface IUser extends IEntityBase {
    userName: string;
    email: string;
    emailConfirmed?: boolean;
    displayName: string;
    imgUrl?: string;
    password?: string;
    passwordHash?: string;
    accessToken?: string;
}

export interface IUserArgs extends IEntityBaseArgs {
    userName: string;
    email: string;
    emailConfirmed?: boolean;
    displayName: string;
    imgUrl?: string;
    password?: string;
    passwordHash?: string;
}

export interface IUserForLog {
    id: string;
    userName: string;
    email: string;
    displayName: string;
}
