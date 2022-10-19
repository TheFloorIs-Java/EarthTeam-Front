import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  //UPDATE USER via PUT 
  updateUser(email: String, firstName: String): void {
    this.http.put<any>("http://localhost:8080/api/user/", {
      id: this.authService.userInfo.id, email: email, password: this.authService.userInfo.password, firstName: firstName, lastName: this.authService.userInfo.lastName
    }).subscribe(response => console.log(response));
  }
}
