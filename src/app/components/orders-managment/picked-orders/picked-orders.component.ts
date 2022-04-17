import { OrderService } from './../../../services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picked-orders',
  templateUrl: './picked-orders.component.html',
  styleUrls: ['./picked-orders.component.css']
})
export class PickedOrdersComponent implements OnInit {
  orders: any[] = [];
  constructor(private OrderService:OrderService) {
    this.orders=[]
   }

  ngOnInit(): void {
  }

  getPickedOrders(){
    this.OrderService.picked().subscribe(res=>{
      console.log(res.data)
      this.orders = res.data
    })
  }


}
