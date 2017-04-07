import { IUser, IUserArgs } from './IUser';

export interface IUserApp {
    save(user: IUserArgs): Promise<IUser>;
    find(query: any, options: { limit: number }): Promise<IUser[]>;

    authenticateUser(userNameOrEmail: string, password: string): Promise<IUser>;
    getAuthToken(userNameOrEmail: string, password: string): Promise<IUser>;
    verifyAuthToken(token: string): Promise<IUser>;
    hashPassword(user: IUser): Promise<IUser>;
    seed();
}
