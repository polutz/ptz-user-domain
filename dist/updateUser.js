"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Update old db user data with new user data.
 * @param oldUser
 * @param newUser
 */
var updateUser = exports.updateUser = function updateUser(oldUser, _ref) {
    var userName = _ref.userName,
        email = _ref.email,
        displayName = _ref.displayName,
        passwordHash = _ref.passwordHash,
        imgUrl = _ref.imgUrl;

    return Object.assign({}, oldUser, {
        userName: userName,
        email: email,
        displayName: displayName,
        passwordHash: passwordHash,
        imgUrl: imgUrl,
        dtChanged: new Date()
    });
};
//# sourceMappingURL=updateUser.js.map
//# sourceMappingURL=updateUser.js.map