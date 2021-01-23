import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RegisterService } from '../register/register.service';
import { User } from '../../utils/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public user: User
  constructor(private registerService: RegisterService, private router: Router) {
    this.user = new User();
  }

  ngOnInit(): void {
    this.getUserInformation();
  }

  public getUserInformation(): void {
    this.user = this.registerService.getUser();
    if (this.user === null) {
      this.router.navigate(['register']);
    }
  }

}
