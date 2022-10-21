import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  dark : boolean = false;

  constructor() { }

  public darkToggle() {
    this.dark = !this.dark;
    document.body.classList.toggle('dark');
  }
}
