import { Component, OnInit }  from '@angular/core';

import { User }               from '../entities/user';
import { SignInService }       from '../service/signin.service';

@Component({
  moduleId: module.id,
  selector: 'my-signup',
  templateUrl: './signup.component.html',
  styleUrls: [ './signup.component.css' ]
})
export class SignUpComponent implements OnInit {

  user: User;

  constructor(private signInService: SignInService) { }

  ngOnInit(): void {
  }

  signup(userName: string, password: string) {

  }

}
