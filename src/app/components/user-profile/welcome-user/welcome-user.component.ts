import { UserService } from 'app/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-user',
  templateUrl: './welcome-user.component.html',
  styleUrls: ['./welcome-user.component.css']
})
export class WelcomeUserComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}
