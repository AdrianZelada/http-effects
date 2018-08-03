import { Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import { Observable } from '../../../../node_modules/rxjs';

import * as userActions from '../../store/actions'
import { map, switchMap, catchError } from '../../../../node_modules/rxjs/operators';
import { UserService } from '../../services/user.service';
import { of} from 'rxjs';

@Injectable()
export class UserEffects {
    constructor(private actions$:Actions, private userService:UserService) {
        
    }

    @Effect()
    loadUser$ :Observable<any> = this.actions$.ofType(userActions.LOAD_USER)
    .pipe(
        switchMap((action)=>{
            return this.userService.getUser(action['id'])
                .pipe(
                    map((users)=>{
                        return new userActions.LoadUserSuccess(users);                        
                    }),
                    catchError((e)=>{
                        return of(new userActions.LoadUserFail(e));
                    })
                )
        })
    ) 
}