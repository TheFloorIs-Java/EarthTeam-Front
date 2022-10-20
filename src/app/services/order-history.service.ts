import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {

  private orderUrl: string = "/api/order";

  orders: any = []

  constructor(private http: HttpClient, private authService: AuthService) { }

  addOrder(order: any){
    this.orders.push(order)
    this.postOrderHistory(order)
    console.log("Order History:")
    console.log(this.orders);
  }

  postOrderHistory(order: any){
    order.userId = this.authService.userInfo.id;
    this.http.post<any>(environment.baseUrl+this.orderUrl, order, {headers: environment.headers, withCredentials: environment.withCredentials}).subscribe(() => console.log("Order Posted"))
  }

  getOrderHistoryByUserId(): Observable<any>{
    console.log("fetching order history")
    return this.http.get<any>(environment.baseUrl+this.orderUrl + "/" + this.authService.userInfo.id, {headers: environment.headers, withCredentials: environment.withCredentials})
  }
}
