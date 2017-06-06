import * as assert from 'ptz-assert';
import * as User from './index';
import { updateUser } from './updateUser';

describe('updateUser', () => {
    var dbUser: User.IUser, newUser: User.IUser, updatedUser: User.IUser;

    beforeEach(() => {
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

        updatedUser = updateUser(dbUser, newUser);
    });

    it('Should not update id', () => {
        assert.notEqual(newUser.id, updatedUser.id);
    });

    it('Should not update createdBy', () => {
        assert.notEqual(newUser.createdBy, updatedUser.createdBy);
    });

    it('Should update dtChanged', () => {
        newUser.dtChanged = new Date('1992-06-28');

        assert.ok(updatedUser.dtChanged);
        assert.ok(updatedUser.dtChanged > newUser.dtChanged);
    });

    it('Should add dtChanged', () => {
        newUser.dtChanged = null;
        assert.ok(updatedUser.dtChanged);
    });

    it('Should update userName', () => {
        assert.equal(newUser.userName, updatedUser.userName);
    });

    it('Should update email', () => {
        assert.equal(newUser.email, updatedUser.email);
    });

    it('Should update emailConfirmed', () => {
        assert.equal(newUser.email, updatedUser.email);
    });

    it('Should update displayName', () => {
        assert.equal(newUser.displayName, updatedUser.displayName);
    });

    it('Should update imgUrl', () => {
        assert.equal(newUser.imgUrl, updatedUser.imgUrl);
    });

    it('Should update passwordHash', () => {
        assert.equal(newUser.passwordHash, updatedUser.passwordHash);
    });
});
