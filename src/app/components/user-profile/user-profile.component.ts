import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userNavIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  userNavButtonClicked(index: number): void {
    this.userNavIndex = index;
  }
}
