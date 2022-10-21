import { UserService } from './../../../services/user.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  
  /**
   * Boolean to help us define if the component we would like to see shown or not shown.
   */
  visible: boolean = false;

  /**
   * These are the values that are used to update the User DB.
   * With ngModel(directive binding) allows us to take in the value the user types and stores it in the apporiate variable and then we can use those variables as needed. 
   */
  updateFirstName: String = "";
  updateEmail: String = "";

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  /**
   * An Event for the button to display the Modify Card on Click.
   * If component is not shown(false) than it will change to shown(true).
   */
  btnClick(): void {
    this.visible = !this.visible;
  }

  /**
   * Our method in this component to update the user information via our userService. 
   * We set that if the user does not provide any information, it will automatically insert the data that exists in the DB.
   * We call our userService to utilize the updateUser method that takes in the 2 parameters that the user would like to update.
   * Lastly, we will set the newly updated information to the userService. 
   */
  updateUserInformation(): void {
    if (this.updateFirstName == "") {
      this.updateFirstName = this.userService.userInfo.firstName;
    }
    if (this.updateEmail == "") {
      this.updateEmail = this.userService.userInfo.email;
    }
    this.userService.updateUser(this.updateEmail, this.updateFirstName);
    this.userService.userInfo.firstName = this.updateFirstName;
    this.userService.userInfo.email = this.updateEmail;
  }

}