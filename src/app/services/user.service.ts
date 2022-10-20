import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  //UPDATE USER via PUT 
  updateUser(email: String, firstName: String): void {
    // const body = {id: this.authService.userInfo.id, email: email, password: this.authService.userInfo.password, firstName: firstName, lastName: this.authService.userInfo.lastName}
    const body = {email: email, firstName: firstName}
    this.http.put<any>("http://localhost:8080/api/user/" + this.authService.userInfo.id, body, {headers: environment.headers, withCredentials: environment.withCredentials 
    }).subscribe(response => console.log(response));
  }
}
