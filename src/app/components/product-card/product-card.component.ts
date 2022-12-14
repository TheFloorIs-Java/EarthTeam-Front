import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'app/models/product';
import { ProductService } from 'app/services/product.service';
import { ThemeService } from 'app/services/theme.service';

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

  @Input() productInfo: Product = {
    id: 0,
    name: 'product',
    quantity: 1,
    price: 10,
    description: 'product description',
    image: 'src\assets\images\rev-logo.png'
  };

  constructor(private productService: ProductService, public themeService : ThemeService) { }
  
  ngOnInit(): void {
    this.subscription = this.productService.getCart().subscribe(
      (cart) => {
        this.cartCount = cart.cartCount;
        this.products = cart.products;
        this.totalPrice = cart.totalPrice;
      }
    );
    if (this.productInfo.quantity <= 0) {
      this.displayButtons = false;
  }
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
  displayButtons = true;

}


