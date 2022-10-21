import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  cartCount!: number;
  products: {
    product: Product,
    quantity: number;
  }[] = [];
  totalPrice!: number;
  cartProducts: Product[] = [];
  setProduct: String = '';

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getCart().subscribe(
      (cart) => {
        this.products = cart.products;
        this.products.forEach(
          (element) => this.cartProducts.push(element.product)
        );
        this.totalPrice = cart.totalPrice;
        this.cartCount = cart.cartCount;
      }
    );
    }
    /**
     * This method changes the quantity in the cart page(increase and decrease the quantity)
     * Also removes the item if the decrease gets to 0
     * @param product (product selected to be added or subtracted)
     * @param numb when the product is add the total increase and subtract the total also decrease
     * @returns 
     */
    changeQuantity(product: Product, numb: number): void{
      let inCart = false;
     console.log(this.products);
      for(let i = 0; i < this.products.length; i +=1){
            if(this.products[i].product.id == product.id){
              this.totalPrice += this.products[i].product.price*numb;
              this.cartCount+=numb;
              this.products[i].quantity+=numb;
              if(this.products[i].quantity == 0){
                this.removeItem(product);
              }
              /**
               * if statement: to limit the cart quantity by the product available
               */
              if(this.products[i].quantity -1 >= product.quantity){
                this.totalPrice -= this.products[i].product.price;
                this.products[i].quantity-=numb;
                this.cartCount-=numb;
                break;
              }
              let cart = {
                cartCount: this.cartCount,
                products: this.products,
                totalPrice: this.totalPrice
              };
              this.productService.setCart(cart);
              inCart=true;
              return;
          }
        }
    }
      /**
       * Method to clean the shopping cart and route back to the products page
       */
  emptyCart(): void {
    let cart = {
      cartCount: 0,
      products: [],
      totalPrice: 0.00
    };
    this.productService.setCart(cart);
    this.router.navigate(['/home']);
  }
  /**
   * This method removes each product from the cart, after button is clicked
   * decrement from the total price when item gets removed from the cart
   * @param product (product selected to be removed)
   * @returns 
   */
  removeItem(product: Product): void{
    let inCart = false;
   console.log(this.products);
    for(let i = 0; i < this.products.length; i +=1){
          if(this.products[i].product.id == product.id){
            let cart = {
              cartCount: this.cartCount - this.products[i].quantity,
              products: this.products,
              totalPrice: this.totalPrice - product.price*this.products[i].quantity
            };
            this.totalPrice -= this.products[i].product.price*this.products[i].quantity;
            this.cartCount -= this.products[i].product.quantity;
            this.products.splice(i, 1);
            this.productService.setCart(cart);
            inCart=true;
            return;
      }
    }
  }
}

  // itemNotAvailable(product: Product){
  //   for(let i = 0; i >= this.products.length; i--){
  //     if(this.products[i].quantity === product.quantity){
  //       let cart = {
  //         cartCount: -1,
  //         products: this.products,
  //         totalPrice: this.totalPrice = product.price,
  //      };
  //    //his.totalPrice -= this.products[i].product.price;
  //     this.productService.setCart(cart);

  //                // this.totalPrice = this.products.totalPrice;
  //               //this.itemNotAvailable(product);
  //   }
  // }
  //   }
  // }
