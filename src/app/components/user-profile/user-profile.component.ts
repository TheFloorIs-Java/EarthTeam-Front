import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'app/services/theme.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userNavIndex: number = 0;

  constructor( public themeService : ThemeService) { }

  ngOnInit(): void {
  }

  userNavButtonClicked(index: number): void {
    this.userNavIndex = index;
  }
}
