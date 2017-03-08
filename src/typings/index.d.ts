/// <reference path="./IUser.d.ts" />
/// <reference path="./IUserRepository.d.ts" />
/// <reference path="./IUserApp.d.ts" />

declare module ptzUserDomain {
    class User implements IUser {
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

declare module "ptz-user-domain"
{
    export = ptzUserDomain;
}