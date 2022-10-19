import { User } from './../../../models/user';
import { UserService } from './../../../services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
 //child
  visible: boolean = false;
  
  //display variables
  firstName: String = "";
  email: String = "";
  @Input()
  updateFirstName: String = "";

  @Input()
  updateEmail: String = "";

  constructor(private authService : AuthService, private userService: UserService) { }

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
  // IF USER LEAVES IT BLANK IT WILL DEFAULT TO THE EXISTING VALUE  
    if(this.updateFirstName == ""){
      this.updateFirstName = this.firstName;
    }
    if(this.updateEmail == ""){
      this.updateEmail = this.email;
    }
    this.userService.updateUser(this.updateEmail, this.updateFirstName);
  }   

}
