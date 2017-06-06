/**
 * Update old db user data with new user data.
 * @param oldUser
 * @param newUser
 */
export const updateUser = (oldUser, { userName, email, displayName, passwordHash, imgUrl }) => {
    return Object.assign({}, oldUser, {
        userName,
        email,
        displayName,
        passwordHash,
        imgUrl,
        dtChanged: new Date()
    });
};
//# sourceMappingURL=updateUser.js.map