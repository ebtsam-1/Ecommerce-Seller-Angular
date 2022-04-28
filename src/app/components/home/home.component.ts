import { Component, OnInit } from '@angular/core';
import { OrdersData } from 'src/app/models/orders-data';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ordersdatacount :OrdersData = {} as OrdersData
  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
    this.orderService.ordersdatacount().subscribe(res=>{
      this.ordersdatacount = res.data;
      console.log(this.ordersdatacount)
    })


  }

}
