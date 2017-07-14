import { ICreatedBy as ICreatedByBase } from 'ptz-core-domain';
import { IUserForLog } from './IUser';

export type ICreatedBy = ICreatedByBase<IUserForLog>;
