import { IEntityBase, IEntityBaseArgs } from 'ptz-core-domain';

export interface IUser extends IEntityBase {
    userName: string;
    email: string;
    emailConfirmed?: boolean;
    displayName: string;
    imgUrl?: string;
    password?: string;
    passwordHash?: string;
    accessToken?: string;

    update(user: IUser): IUser;
    otherUsersWithSameUserNameOrEmail(users: IUserArgs[]): boolean;
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