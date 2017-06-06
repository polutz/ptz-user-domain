'use strict';

var _ptzAssert = require('ptz-assert');

var assert = _interopRequireWildcard(_ptzAssert);

var _index = require('./index');

var User = _interopRequireWildcard(_index);

var _updateUser = require('./updateUser');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe('updateUser', function () {
    var dbUser, newUser, updatedUser;
    beforeEach(function () {
        dbUser = User.createUser({
            id: 'OldId',
            userName: 'OldUserName',
            email: 'alanmarcell@live.com',
            displayName: 'Old Name',
            imgUrl: 'OldImage',
            passwordHash: 'OldHash',
            createdBy: {
                dtCreated: new Date('1992-06-28'),
                ip: '192.168.0.1'
            }
        });
        newUser = User.createUser({
            id: 'NewId',
            userName: 'NewUserName',
            email: 'angeloocana@gmail.com',
            displayName: 'New Name',
            imgUrl: 'NewImage',
            passwordHash: 'NewHash',
            createdBy: {
                dtCreated: new Date('1992-01-07'),
                ip: '192.168.0.1',
                user: {
                    userName: 'AlanMarcell',
                    displayName: 'Alan Marcell',
                    email: 'alanmarcell@live.com',
                    id: 'New_Id'
                }
            }
        });
        updatedUser = (0, _updateUser.updateUser)(dbUser, newUser);
    });
    it('Should not update id', function () {
        assert.notEqual(newUser.id, updatedUser.id);
    });
    it('Should not update createdBy', function () {
        assert.notEqual(newUser.createdBy, updatedUser.createdBy);
    });
    it('Should update dtChanged', function () {
        newUser.dtChanged = new Date('1992-06-28');
        assert.ok(updatedUser.dtChanged);
        assert.ok(updatedUser.dtChanged > newUser.dtChanged);
    });
    it('Should add dtChanged', function () {
        newUser.dtChanged = null;
        assert.ok(updatedUser.dtChanged);
    });
    it('Should update userName', function () {
        assert.equal(newUser.userName, updatedUser.userName);
    });
    it('Should update email', function () {
        assert.equal(newUser.email, updatedUser.email);
    });
    it('Should update emailConfirmed', function () {
        assert.equal(newUser.email, updatedUser.email);
    });
    it('Should update displayName', function () {
        assert.equal(newUser.displayName, updatedUser.displayName);
    });
    it('Should update imgUrl', function () {
        assert.equal(newUser.imgUrl, updatedUser.imgUrl);
    });
    it('Should update passwordHash', function () {
        assert.equal(newUser.passwordHash, updatedUser.passwordHash);
    });
});
//# sourceMappingURL=updateUser.test.js.map
//# sourceMappingURL=updateUser.test.js.map