import { IUser } from './IUser';

/**
 * Update old db user data with new user data.
 * @param oldUser
 * @param newUser
 */
export const updateUser = (oldUser: IUser, { userName,
    email,
    displayName,
    passwordHash,
    imgUrl }: IUser): IUser => {
    return Object.assign({}, oldUser, {
        userName,
        email,
        displayName,
        passwordHash,
        imgUrl,
        dtChanged: new Date()
    });
};
