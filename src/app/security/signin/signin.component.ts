import { Component, OnInit }  from '@angular/core';

import { User }               from '../entities/user';
import { SignInService }       from '../service/signin.service';

@Component({
  moduleId: module.id,
  selector: 'my-signin',
  templateUrl: './signin.component.html',
  styleUrls: [ './signin.component.css' ]
})
export class SignInComponent implements OnInit {

  user: User;

  constructor(private signInService: SignInService) { }

  ngOnInit(): void {
  }

  login(userName: string, password: string) {

  }

  logout() {

  }

}
