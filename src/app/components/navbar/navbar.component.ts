import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'app/services/auth.service';
import { ProductService } from 'app/services/product.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  cartCount!: number;
  subscription!: Subscription;
  dark : boolean = this.productService.dark;
  toggleControl = new FormControl(this.productService.dark);


  constructor(private authService: AuthService, private router: Router, private productService: ProductService) { }
  
  ngOnInit(): void {
    this.subscription = this.productService.getCart().subscribe(
      (cart) => this.cartCount = cart.cartCount
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  darkControl() {
    document.body.classList.toggle('dark');
    this.productService.darkToggle();
    this.dark = !this.dark;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
