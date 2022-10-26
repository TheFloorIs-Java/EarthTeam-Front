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

  addOrder(order: any){
    this.orders.push(order)
    this.postOrderHistory(order)
    console.log("Order History:")
    console.log(this.orders);
  }

  postOrderHistory(order: any){
    order.userId = this.userService.userInfo.id;
    this.http.post<any>(environment.baseUrl+this.orderUrl, order, {headers: environment.headers, withCredentials: environment.withCredentials}).subscribe(() => console.log("Order Posted"))
  }

  getOrderHistoryByUserId(): Observable<any>{
    console.log("fetching order history")
    return this.http.get<any>(environment.baseUrl+this.orderUrl + "/" + this.userService.userInfo.id, {headers: environment.headers, withCredentials: environment.withCredentials})
  }
}
