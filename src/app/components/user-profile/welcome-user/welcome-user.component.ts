import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-welcome-user',
  templateUrl: './welcome-user.component.html',
  styleUrls: ['./welcome-user.component.css']
})
export class WelcomeUserComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
