import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { environment } from 'environments/environment';
import { User } from 'app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /**
   * This is where we will store the User Information when the user logins
   */
  userInfo : User = {
    id:0,
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  }
  
  constructor(private http: HttpClient) {
  }

  /**
   * This is our HTTP Put Request to allow the user logged in to be able to update their first name and their email address as needed.
   * @param email 
   * @param firstName 
   */
  updateUser(email: String, firstName: String): void {
    const body = {email: email, firstName: firstName}
    this.http.put<any>("http://localhost:8080/api/user/" + this.userInfo.id, body, {headers: environment.headers, withCredentials: environment.withCredentials 
    }).subscribe(response => console.log(response));
  }
}
