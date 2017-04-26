## master


## 1.8.1 (April 26, 2017)

* Fix unused variables.

## 1.8.0 (April 26, 2017)

* Rename Authenticate to Auth.
* Rename UserApp func args.

## 1.7.0 (April 25, 2017)

* Update to ptz-validations 1.2.0:
    - Add static validations prop to User and AuthenticateUserForm.

## 1.6.0 (April 24, 2017)

* Using ptz-validations.

## 1.5.3 (April 19, 2017)

* Change User isValid() to validate()
    - When you call user.isValid(), it is validating the user again instead of only validation in user constructor.

## 1.5.2 (April 19, 2017)

* Change users seed data password to testtest.
    - This fix password min length error.

## 1.5.1 (April 19, 2017)

* Remove User.getUserAthenticationError.
* Change error key:
	- from ERROR_USER_INVALID_USERNAME_OR_PASSWORD
	- to ERROR_USERAPP_GETAUTHTOKEN_INVALID_USERNAME_OR_PASSWORD
* Add prop errors to IAuthToken.

## 1.5.0 (April 19, 2017)

* Change IUserApp.getAuthToken return from IUser to IAuthToken.

## 1.4.1 (April 19, 2017)

* Export AuthenticateUserForm.

## 1.4.0 (April 18, 2017)

* Add AuthenticateUserForm.
* Update User to use validate from ptz-core-domain.
* User validate password min and max length.

## 1.3.1 (April 13, 2017)

* Exports:
    - IUserAppISaveArgs,
    - IUserAppIFindArgs,
    - IUserAppIAuthenticateUserArgs,
    - IUserAppIGetAuthTokenArgs,
    - IUserAppIVerifyAuthTokenArgs,

## 1.3.0 (April 13, 2017)

* Add IUserForLog.
* Add ICreatedBy.
* Add EntityBase and IEntityBase.
* Add IAppFuncArgs.

## 1.2.5 (April 7, 2017)

* Add export default to users.

## 1.2.4 (April 7, 2017)

* Remove babel-node, babel-polyfill, babel-core and ptz-babel-register.

## 1.2.3 (April 7, 2017)

* Add IUserAppArgs.

## 1.2.2 (April 7, 2017)

* Add seed to IUserApp.

## 1.2.1 (April 7, 2017)

* Remove typings.
* Add users data for seed and tests.

## 1.2.0 (April 5, 2017)

* Remove gulp.
* Add debug support for vs code.

## 1.1.4 (March 30, 2017)

* Change IUserApp.save param from IUser to IUserArgs

## 1.1.3 (March 30, 2017)

* IUserRepository extends IBaseRepository from ptz-core-domain

## 1.0.0 (March 04, 2017)

* Initial public release.
