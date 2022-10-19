import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {

  private orderUrl: string = "/api/order";

  orders: any = []

  constructor(private http: HttpClient) { this.getOrderHistoryByUserId(1)}

  addOrder(order: any){
    this.orders.push(order)
    this.postOrderHistory(order)
    console.log("Order History:")
    console.log(this.orders);
  }

  postOrderHistory(order: any){
    this.http.post<any>(environment.baseUrl+this.orderUrl, order, {headers: environment.headers, withCredentials: environment.withCredentials}).subscribe(() => console.log("Order Posted"))
  }

  getOrderHistoryByUserId(userId: number){
    console.log("fetching order history")
    this.http.get<any>(environment.baseUrl+this.orderUrl + "/" + userId, {headers: environment.headers, withCredentials: environment.withCredentials})
    .subscribe(data => {
      this.orders = data;
      console.log("Order history fetched:");
      console.log(this.orders);
    });
  }
}
