import { IBaseRepository } from 'ptz-core-domain';
import { IUser } from './IUser';

export interface IUserRepository extends IBaseRepository<IUser> {
    getByUserNameOrEmail(userNameOrEmail: string): Promise<IUser>;
    getOtherUsersWithSameUserNameOrEmail(user: IUser): Promise<IUser[]>;
}
