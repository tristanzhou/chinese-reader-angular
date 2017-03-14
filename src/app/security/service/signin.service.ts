import { Injectable } from '@angular/core';

import { User }       from '../entities/user';

@Injectable()
export class SignInService {

  login(user: User): User {
    // todo login
    return new User();
  }

}
