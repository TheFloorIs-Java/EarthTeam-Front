import { UserService } from './../../../services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { ThemeService } from 'app/services/theme.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
 // For Button to display the Modify Card
  visible: boolean = false;

   // Taking the value in the Input for our Request Body
  @Input()
  updateFirstName: String = "";
  @Input()
  updateEmail: String = "";
 
  constructor(public authService : AuthService, private userService: UserService, public themeService : ThemeService) { }

  ngOnInit(): void {
  }
  
  // DISPLAY/HIDE COMPONENTS
  btnClick(): void {
    this.visible = !this.visible;
  }

  // UPDATE VIA PUT REQUEST
  updateUserInformation() : void {
    // If the user does not provide any information, it will automatically insert the data that was in the DB
    if(this.updateFirstName == ""){
      this.updateFirstName = this.authService.userInfo.firstName;
    }
    if(this.updateEmail == ""){
      this.updateEmail = this.authService.userInfo.email;
    }
    // The PUT request via the userService
    this.userService.updateUser(this.updateEmail, this.updateFirstName);
    // Updating the existing information to the new data    
    this.authService.userInfo.firstName = this.updateFirstName;
    this.authService.userInfo.email = this.updateEmail;
  }  
  
  }