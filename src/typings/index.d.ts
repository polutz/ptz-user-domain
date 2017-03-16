import {IUser, IUserArgs} from './IUser';
import {IUserApp} from './IUserApp';
import {IUserRepository} from './IUserRepository';

declare module 'ptz-user-domain' {
    export class User implements IUser {
        userName: string;
        email: string;
        emailConfirmed?: boolean;
        displayName: string;
        imgUrl?: string;
        password?: string;
        passwordHash?: string;

        constructor(user: IUserArgs);

        update(user: IUser): IUser;
        otherUsersWithSameUserNameOrEmail(users: IUser[]): boolean;
        isValid(): boolean;
        throwErrorIfIsInvalid(): void;
    }
}
