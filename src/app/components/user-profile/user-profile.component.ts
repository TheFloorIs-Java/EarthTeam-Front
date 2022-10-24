import { map } from 'rxjs/operators';
import { UserService } from './../../services/user.service';
import { AuthService } from 'app/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { ThemeService } from 'app/services/theme.service';

import { User } from 'app/models/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  //parent
  userNavIndex: number = 0;

  user : User = {
    id:0,
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  }
  router: any;
  
  constructor(private authService : AuthService, public themeService : ThemeService) { }

  ngOnInit(): void {
  }

 userNavButtonClicked(index: number): void {
    this.userNavIndex = index;
  }
}
