import {
    containsFind, emptyArray, equal, notContainsFind,
    notEqual, notOk, ok, throws
} from 'ptz-assert';
import { allErrors as allValidationErrors } from 'ptz-validations';
import { allErrors, IUser, IUserArgs, User } from './index';

describe('User', () => {
    describe('UserName', () => {
        it('Add error when null username', () => {
            const user = new User({ userName: null, email: '', displayName: '' });
            containsFind(user.errors, e => e.propName === 'userName'
                && e.errorMsg === allValidationErrors.REQUIRED);
        });

        it('Add error when empty username', () => {
            const user = new User({ userName: '', email: '', displayName: '' });
            containsFind(user.errors, e => e.propName === 'userName'
                && e.errorMsg === allValidationErrors.REQUIRED);
        });

        it('Do not add error when valid username', () => {
            const user = new User({ userName: 'angeloocana', email: '', displayName: '' });
            notContainsFind(user.errors, e => e.propName === 'userName'
                && e.errorMsg === allValidationErrors.REQUIRED);
        });

        it('Add error when minlength userName', () => {
            const user = new User({ userName: 'a', email: '', displayName: '' });
            containsFind(user.errors, e => e.propName === 'userName'
                && e.errorMsg === allValidationErrors.MIN_LENGTH);
        });

        it('Add error when maxlength userName', () => {
            const user = new User({
                userName: 'labalblhblhbohblabcascjbascijbascjbasclasbclasbash',
                email: '', displayName: ''
            });
            containsFind(user.errors, e => e.propName === 'userName'
                && e.errorMsg === allValidationErrors.MAX_LENGTH);
        });

        it('Should be lowercase', () => {
            const user = new User({ userName: 'AnGeLoOcAnA', email: '', displayName: '' });
            equal(user.userName, 'angeloocana');
        });
    });

    describe('Email', () => {
        it('Add error when empty email', () => {
            const user = new User({ userName: '', email: '', displayName: '' });
            containsFind(user.errors, e => e.propName === 'email'
                && e.errorMsg === allValidationErrors.REQUIRED);
        });

        it('Add error when invalid email', () => {
            const user = new User({ userName: '', email: 'angeloocanagmail.com', displayName: '' });
            containsFind(user.errors, e => e.propName === 'email'
                && e.errorMsg === allValidationErrors.INVALID_EMAIL);
        });

        it('Do not add error when valid email', () => {
            const user = new User({ userName: 'angeloocana', email: 'angeloocana@gmail.com', displayName: '' });

            notContainsFind(user.errors, e => e.propName === 'email'
                && e.errorMsg === allValidationErrors.REQUIRED);

            notContainsFind(user.errors, e => e.propName === 'email'
                && e.errorMsg === allValidationErrors.INVALID_EMAIL);
        });

        it('Should be lowercase', () => {
            const user = new User({ userName: 'AnGeLoOcAnA', email: 'AnGeLoOcAnA@gMaIl.CoM', displayName: '' });
            equal(user.email, 'angeloocana@gmail.com');
        });

    });

    describe('Update', () => {
        var dbUser: IUser, newUser: IUser, updatedUser: IUser;

        beforeEach(() => {
            dbUser = new User({
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

            newUser = new User({
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
            updatedUser = dbUser.update(newUser);
        });

        it('Should not update id', () => {
            notEqual(newUser.id, updatedUser.id);
        });

        it('Should not update createdBy', () => {
            notEqual(newUser.createdBy, updatedUser.createdBy);
        });

        it('Should update dtChanged', () => {
            newUser.dtChanged = new Date('1992-06-28');

            ok(updatedUser.dtChanged);
            ok(updatedUser.dtChanged > newUser.dtChanged);
        });

        it('Should add dtChanged', () => {
            newUser.dtChanged = null;
            ok(updatedUser.dtChanged);
        });

        it('Should update userName', () => {
            equal(newUser.userName, updatedUser.userName);
        });

        it('Should update email', () => {
            equal(newUser.email, updatedUser.email);
        });

        it('Should update emailConfirmed', () => {
            equal(newUser.email, updatedUser.email);
        });

        it('Should update displayName', () => {
            equal(newUser.displayName, updatedUser.displayName);
        });

        it('Should update imgUrl', () => {
            equal(newUser.imgUrl, updatedUser.imgUrl);
        });

        it('Should update passwordHash', () => {
            equal(newUser.passwordHash, updatedUser.passwordHash);
        });
    });

    describe('otherUsersWithSameUserNameOrEmail', () => {
        it('should return false when otherUsers is empty', () => {
            const user = new User({
                userName: 'allanegidio',
                email: 'allan.egidio@outlook.com',
                displayName: 'Allan Egidio'
            });

            const thereIsOtherUsers = user.otherUsersWithSameUserNameOrEmail([]);

            notOk(thereIsOtherUsers);
            emptyArray(user.errors);
        });

        it('should return false when otherUsers is null', () => {
            const user = new User({
                userName: 'allanegidio',
                email: 'allan.egidio@outlook.com',
                displayName: 'Allan Egidio'
            });

            const thereIsOtherUsers = user.otherUsersWithSameUserNameOrEmail(null);

            notOk(thereIsOtherUsers);
            emptyArray(user.errors);
        });

        it('should return true and addError when userName already in use', () => {
            const user = new User({
                userName: 'allanegidio',
                email: 'allan.egidio@outlook.com',
                displayName: 'Allan Egidio'
            });

            const otherUser: IUserArgs = {
                userName: 'allanegidio',
                email: 'angeloocana@gmail.com',
                displayName: 'Angelo Ocana'
            };

            const thereIsOtherUsers = user.otherUsersWithSameUserNameOrEmail([otherUser]);

            ok(thereIsOtherUsers);
            containsFind(user.errors, e => e.propName === 'userName'
                && e.errorMsg === allErrors.ERROR_USER_USERNAME_IN_USE);
        });

        it('should return true and addError when email already in use', () => {
            const user = new User({
                userName: 'allanegidio',
                email: 'allan.egidio@outlook.com',
                displayName: 'Allan Egidio'
            });

            const otherUser: IUserArgs = {
                userName: 'angeloocana',
                email: 'allan.egidio@outlook.com',
                displayName: 'Allan Egidio'
            };

            const thereIsOtherUsers = user.otherUsersWithSameUserNameOrEmail([otherUser]);

            ok(thereIsOtherUsers);
            containsFind(user.errors, e => e.propName === 'email'
                && e.errorMsg === allErrors.ERROR_USER_EMAIL_IN_USE);
        });
    });

    it('throw error when null args', () => {
        throws(() => new User(null));
    });
});
