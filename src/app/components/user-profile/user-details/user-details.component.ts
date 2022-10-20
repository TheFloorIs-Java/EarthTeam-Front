import { UserService } from './../../../services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
 
  visible: boolean = false;

  @Input()
  updateFirstName: String = "";

  @Input()
  updateEmail: String = "";
 
  //display variables
  firstName: String = "";
  email: String = "";
  changeDetected: boolean = false;
 

  constructor(public authService : AuthService, private userService: UserService) { }

  ngOnInit(): void {
    this.firstName = this.authService.userInfo.firstName;
    this.email = this.authService.userInfo.email;

  }
  
  // DISPLAY/HIDE COMPONENTS
  btnClick(): void {
    this.visible = !this.visible;
  }

  // UPDATE VIA PUT REQUEST - this works
  updateUserInformation() : void {
    if(this.updateFirstName == ""){
      this.updateFirstName = this.firstName;
    }
    if(this.updateEmail == ""){
      this.updateEmail = this.email;
    }
    
    this.userService.updateUser(this.updateEmail, this.updateFirstName);
    this.authService.userInfo.firstName = this.updateFirstName;
    this.authService.userInfo.email = this.updateEmail;
  }  
  
  }