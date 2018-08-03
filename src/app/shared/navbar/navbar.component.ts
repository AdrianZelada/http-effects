import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
  }

  goUser(id:string){
    if(id){
      this.router.navigate(['/user',id]);
    }
    return ;
  }

}
