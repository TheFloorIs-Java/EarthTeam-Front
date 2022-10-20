import { map } from 'rxjs/operators';
import { UserService } from './../../services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';

import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  //parent
  visible: boolean = false;

  user : User = {
    id:0,
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  }
  
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  btnClick(): void {
    this.visible = !this.visible;
  }


}
