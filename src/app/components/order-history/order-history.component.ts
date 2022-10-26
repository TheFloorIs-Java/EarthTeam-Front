import { Component, OnInit } from '@angular/core';
import { OrderHistoryService } from 'app/services/order-history.service';
import { ThemeService } from 'app/services/theme.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  orders: any = [];
  orderToggles: Array<boolean> = [];

  constructor(private orderHistory: OrderHistoryService, public themeService: ThemeService) { }

  ngOnInit(): void {
    this.orderHistory.getOrderHistoryByUserId().subscribe(data => {
      this.orders = data;
      this.orderToggles = Array(this.orders.length).fill(false);
    })

  }

  toggleOrderMenu(index: number){
    this.orderToggles[index] = !this.orderToggles[index];
  }

}
