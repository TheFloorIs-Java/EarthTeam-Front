import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-welcome-user',
  templateUrl: './welcome-user.component.html',
  styleUrls: ['./welcome-user.component.css']
})
export class WelcomeUserComponent implements OnInit {
  //Child
  @Input()
  firstName: String = "";

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    console.log(this.authService.userInfo.firstName);
    this.firstName = this.authService.userInfo.firstName;
  }

}
