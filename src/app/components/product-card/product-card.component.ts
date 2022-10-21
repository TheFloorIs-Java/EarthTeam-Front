import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit{

  cartCount!: number;
  products: {
    product: Product,
    quantity: number
  }[] = [];
  subscription!: Subscription;
  totalPrice: number = 0;

  @Input() productInfo!: Product;

  constructor(private productService: ProductService) { }
  
  ngOnInit(): void {
    this.subscription = this.productService.getCart().subscribe(
      (cart) => {
        this.cartCount = cart.cartCount;
        this.products = cart.products;
        this.totalPrice = cart.totalPrice;
      }
    );
  }

  addToCart(product: Product, itemCounter: number ): void {

    let inCart = false;
  
    this.products.forEach(
      (element) => {
        if(element.product == product){
          element.quantity+=itemCounter;
          let cart = {
            cartCount: this.cartCount + this.itemCounter,
            products: this.products,
            totalPrice: this.totalPrice + product.price * itemCounter,
          };
          this.productService.setCart(cart);
          inCart=true;
          return;
        };
      }
    );

    if(inCart == false){
      let newProduct = {
        product: product,
        quantity: itemCounter 
      };
      this.products.push(newProduct);
      let cart = {
        cartCount: this.cartCount + this.itemCounter,
        products: this.products,
        totalPrice: this.totalPrice + product.price * this.itemCounter
      }
      this.productService.setCart(cart);
    }
      
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  itemCounter : any = 1;
  checkItemCounter(){
    if (this.itemCounter > this.productInfo.quantity){
      this.itemCounter = this.productInfo.quantity;
    }else if (this.itemCounter < 0) {
      this.itemCounter = 0;
  }
}
decreaseByOne(itemCounter: number){
  
    this.itemCounter = this.itemCounter - 1;
    this.checkItemCounter(); 
  }
  increaseByOne(itemCounter: number){
    this.itemCounter= this.itemCounter + 1;
    this.checkItemCounter();
  }
  
}


