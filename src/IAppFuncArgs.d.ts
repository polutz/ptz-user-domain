import { IAppFuncArgs as IAppFuncArgsBase } from '@alanmarcell/ptz-core-domain';
import { IUserForLog } from './IUser';

export type IAppFuncArgs = IAppFuncArgsBase<IUserForLog>;
