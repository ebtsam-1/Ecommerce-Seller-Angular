import { OrderService } from './../../../services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picked-orders',
  templateUrl: './picked-orders.component.html',
  styleUrls: ['./picked-orders.component.css']
})
export class PickedOrdersComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  orders: any[] = [];
  constructor(private OrderService:OrderService) {
    this.orders=[]
   }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

  getPickedOrders(){
    this.OrderService.picked().subscribe(res=>{
      console.log(res.data)
      this.orders = res.data
    })
  }


}
