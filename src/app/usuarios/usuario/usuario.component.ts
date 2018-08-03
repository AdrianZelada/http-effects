import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Store } from '../../../../node_modules/@ngrx/store';
import { AppState } from '../../store/app.reducers';

import * as fromUser from '../../store/actions';
import { Observable } from '../../../../node_modules/rxjs';
import { filter } from '../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  storeUser$ : Observable<any>;
  constructor(
    private router : ActivatedRoute,
    private store : Store<AppState>
  ) { }

  ngOnInit() {

    this.storeUser$ = this.store.select('user')
    // .pipe(
    //    filter(result => result.user != null)
    //   )
     

    this.router.params.subscribe((data)=>{
      const id = data['id']; 
      console.log(data);
      this.store.dispatch(new fromUser.LoadUser(id));
    })
  }

}
