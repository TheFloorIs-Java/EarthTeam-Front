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
     * This method change the quantity in the cart page(increase and decrease the quantity)
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
                return
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
   * This method remove each product from the cart, after remove button is clicked
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


// console.log(this.products[i].product.id);
          // //console.log(product.id);

  // removeProduct(product: any){
  //     this.products.map((a:any, index:any)=>{
  //       if(product.id === a.id){
  //         this.products.splice(index, 1);
  //           }
  //         //  return this.cartProducts;
          
  //         })
  //       }
  //     }
  
  // removeItem(product: any){
  //         this.cartProducts.map((a:any, index:any)=>{
  //           if(product.id === a.id){
  //             this.cartProducts.splice(index, 1);
  //         }
  //         return this.cartProducts.length;
  //       })
  //     }
  //   }
//   removeItem(product: any){
//     for(let i = 0; i < this.products.length; i += 1){
//       if(this.products[i].id === product.id){
//         this.products.splice(i, 1);
//         return
//     }
//   }
// }
// }

  // removeItem(product: any){
  //   this.cartProducts.map((a:any, index:any)=>{
  //     if(product.id === a.id){
  //       this.cartProducts.splice(index,1);
  //       }
  //     })
  //     this.cartProducts = product(indexedDB);
  //   }
  // }


//   removeItem(product: any){
//     const index: number = this.cartProducts.indexOf(product);
//     if(index !== -1){
//       this.cartProducts.splice(index,1)
//     }
//   }
// }

  //   let cart= {
  //   cartCount: 0,
  //   products: ,
  //   totalPrice: 0.00
  // };
  // this.productService.setCart(product);

//   removeItem(product: any){
//       this.cartProducts.map((a:any, index:any)=>{
//         if(product.id === a.id){
//           this.cartProducts.splice(index, 1);

//       }
//     })
//   }
// }
  
  /** */
  // removeCartItem(product: any){
  //   this.cartProducts.map((a:any, index:any)=>{
  //     if(product.id === a.id){
  //       this.cartProducts.splice(index, 1);
  //     }

  //   })
  // }