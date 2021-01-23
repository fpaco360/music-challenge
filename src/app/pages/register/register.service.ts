import { Injectable } from '@angular/core';
import { User } from '../../utils/user';

@Injectable()
export class RegisterService {

  constructor() { }

  public saveUser(user: User) {
    const formatUser: string = JSON.stringify(user);
    localStorage.setItem('user', formatUser);
  }

  public getUser(): User {
    const stringUser = localStorage.getItem('user');
    return JSON.parse(stringUser);
  }
}
