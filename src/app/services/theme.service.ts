import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  /**
   * Boolean that tells certain components to swap to dark mode.
   */
  dark : boolean = false;

  constructor() { }

  /**
   * Method that swaps the application to dark mode by switching a boolean and appending .dark to the body.
   */
  public darkToggle() {
    this.dark = !this.dark;
    document.body.classList.toggle('dark');
  }
}
