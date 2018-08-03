import { Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import { Observable } from '../../../../node_modules/rxjs';

import * as usersActions from '../../store/actions'
import { map, switchMap, catchError } from '../../../../node_modules/rxjs/operators';
import { UserService } from '../../services/user.service';
import { of} from 'rxjs';

@Injectable()
export class UsersEffects {
    constructor(private actions$:Actions, private userService:UserService) {
        
    }

    @Effect()
    loadUsers$ :Observable<any> = this.actions$.ofType(usersActions.LOAD_USERS)
    .pipe(
        switchMap(()=>{
            return this.userService.getUsers()
                .pipe(
                    map((users)=>{
                        return new usersActions.LoadUsersSuccess(users);                        
                    }),
                    catchError((e)=>{
                        return of(new usersActions.LoadUsersFail(e));
                    })
                )
        })
    ) 
}