import * as V from 'ptz-validations';
import allErrors from './allErrors';
/**
 * Add error to user.errors when there is other users with same userName or email.
 * @param user current user.
 * @param otherUsers other users with same userName or email.
 */
export const otherUsersWithSameUserNameOrEmail = (user, otherUsers) => {
    if (!otherUsers)
        return user;
    const addError = V.addError(user);
    if (otherUsers.filter(otherUser => otherUser.userName === user.userName).length > 0)
        return addError('userName', allErrors.ERROR_USER_USERNAME_IN_USE);
    if (otherUsers.filter(otherUser => otherUser.email === user.email).length > 0)
        return addError('email', allErrors.ERROR_USER_EMAIL_IN_USE);
    return user;
};
//# sourceMappingURL=otherUsersWithSameUserNameOrEmail.js.map