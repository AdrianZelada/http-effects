import * as reducers from './reducers';
import { ActionReducerMap } from '../../../node_modules/@ngrx/store';

export interface AppState{
    users : reducers.UsersState,
    user : reducers.UserState
}

export const appReducers : ActionReducerMap<AppState>={
    users : reducers.UsersReducer,
    user : reducers.UserReducer
}