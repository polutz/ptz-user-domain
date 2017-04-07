import { IUser, IUserArgs } from './IUser';
import { IUserRepository } from './IUserRepository';

export interface IUserApp {
    save(user: IUserArgs): Promise<IUser>;
    find(query: any, options: { limit: number }): Promise<IUser[]>;

    authenticateUser(userNameOrEmail: string, password: string): Promise<IUser>;
    getAuthToken(userNameOrEmail: string, password: string): Promise<IUser>;
    verifyAuthToken(token: string): Promise<IUser>;
    hashPassword(user: IUser): Promise<IUser>;
    seed();
}

export interface IUserAppArgs {
    userRepository: IUserRepository;
    log?: (...args) => void;
}
