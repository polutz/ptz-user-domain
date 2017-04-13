import { IAppFuncArgs as IAppFuncArgsBase } from 'ptz-core-domain';
import { IUserForLog } from './IUser';

export type IAppFuncArgs = IAppFuncArgsBase<IUserForLog>;
