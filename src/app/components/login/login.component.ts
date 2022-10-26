import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new UntypedFormGroup({
    email: new UntypedFormControl(''),
    password: new UntypedFormControl('')
  })

  constructor(private authService: AuthService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  
  onSubmit(): void {
    this.authService.login(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value).subscribe(
      (response) => {
        this.authService.loggedIn = true;
        /*
        this.userService.userInfo is the location the user's information will be stored after they have logged in.
        We do this by setting the response we get from the login request that we send to our server.
        */
        this.userService.userInfo = response;
      },
      (err) => console.log(err),
      () => this.router.navigate(['home'])
    );
  }

  register(): void {
    this.router.navigate(['register']);
  }

}
