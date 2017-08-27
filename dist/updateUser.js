"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Update old db user data with new user data.
 * @param oldUser
 * @param newUser
 */
const updateUser = exports.updateUser = (oldUser, { userName, email, displayName, passwordHash, imgUrl }) => {
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
//# sourceMappingURL=updateUser.js.map