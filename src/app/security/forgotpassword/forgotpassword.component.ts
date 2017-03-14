import { Component, OnInit }  from '@angular/core';

import { User }               from '../entities/user';
import { SignInService }       from '../service/signin.service';

@Component({
  moduleId: module.id,
  selector: 'my-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: [ './forgotpassword.component.css' ]
})
export class ForgotPasswordComponent implements OnInit {

  user: User;

  constructor(private signInService: SignInService) { }

  ngOnInit(): void {
  }

  sendPassword(userName: string, password: string) {

  }

}
