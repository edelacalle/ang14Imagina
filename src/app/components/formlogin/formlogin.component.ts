import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { setuser } from 'src/app/store/user.actions';


import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-formlogin',
  templateUrl: './formlogin.component.html',
  styleUrls: ['./formlogin.component.css']
})
export class FormloginComponent implements OnInit {
  user$: Observable<string>;
  
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });
  constructor( private store: Store<{ user: string }>){
    this.user$ = store.select('user');
  }

  ngOnInit() {
  
  }
  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.store.dispatch(setuser({ username: this.loginForm.value.email??'' }));
    }
  }
}