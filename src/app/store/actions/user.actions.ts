import { Action} from '@ngrx/store';
import { User } from '../../models/user.model';

export const LOAD_USER = '[USER] Load User'; 
export const LOAD_USER_FAIL = '[USER] Load User Fail'; 
export const LOAD_USER_SUCCESS = '[USER] Load User Success'; 

export class LoadUser implements Action {
    readonly type =LOAD_USER;
    constructor(public id:string){}
}

export class LoadUserFail implements Action {
    readonly type =LOAD_USER_FAIL;
    constructor(public payload:any){}
}

export class LoadUserSuccess implements Action {
    readonly type =LOAD_USER_SUCCESS;
    constructor(public user:User){}
}

export type userActions = LoadUser | LoadUserFail | LoadUserSuccess 