import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {

  private orderUrl: string = "/api/order";

  orders: any = []

  constructor(private http: HttpClient, private userService: UserService) { }

   /**
   * Adds order to orders list and posts changes to the api
   *
   * @param order Json object containing the order
   * @return void.
   */
  addOrder(order: any){
    this.orders.push(order)
    this.postOrderHistory(order)
    console.log("Order History:")
    console.log(this.orders);
  }

  /**
   * posts new order object to the e-comerce api
   *
   * @param order Json object containing the order
   * @return void.
   */
  postOrderHistory(order: any){
    order.userId = this.userService.userInfo.id;
    this.http.post<any>(environment.baseUrl+this.orderUrl, order, {headers: environment.headers, withCredentials: environment.withCredentials}).subscribe(() => console.log("Order Posted"))
  }

  /**
   * Gets all orders with logged in user's id from the e-comerce api and returns the associated observable
   *
   * 
   * @return observable for the get request.
   */
  getOrderHistoryByUserId(): Observable<any>{
    console.log("fetching order history")
    return this.http.get<any>(environment.baseUrl+this.orderUrl + "/" + this.userService.userInfo.id, {headers: environment.headers, withCredentials: environment.withCredentials})
  }
}
