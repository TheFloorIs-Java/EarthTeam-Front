import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'app/services/auth.service';
import { ProductService } from 'app/services/product.service';
import { FormControl } from '@angular/forms';
import { ThemeService } from 'app/services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  cartCount!: number;
  subscription!: Subscription;
  toggleControl = new FormControl(this.themeService.dark);


  constructor(private authService: AuthService, private router: Router, private productService: ProductService, public themeService : ThemeService) { }
  
  ngOnInit(): void {
    this.subscription = this.productService.getCart().subscribe(
      (cart) => this.cartCount = cart.cartCount
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  darkControl() {
    this.themeService.darkToggle();
  }

  logout() {
    this.authService.logout();
    if(this.themeService.dark){
      this.themeService.darkToggle();
    }
    this.router.navigate(['login']);
  }

}
