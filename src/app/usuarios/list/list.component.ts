import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { Store } from '../../../../node_modules/@ngrx/store';
import { AppState } from '../../store/app.reducers';
import * as usersActions from '../../store/actions';
import { Observable } from '../../../../node_modules/rxjs';
import { map } from '../../../../node_modules/rxjs/operators';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  users : User[]=[];
  storeUsers$ : Observable<any>;
  constructor(private userService: UserService, private store : Store<AppState>) { }

  ngOnInit() {

    this.storeUsers$ = this.store.select('users');      
    const action = new usersActions.LoadUsers();
    this.store.dispatch(action);
  }
  

}
