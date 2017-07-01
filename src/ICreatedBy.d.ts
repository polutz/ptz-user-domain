import { ICreatedBy as ICreatedByBase } from '@alanmarcell/ptz-core-domain';
import { IUserForLog } from './IUser';

export type ICreatedBy = ICreatedByBase<IUserForLog>;
