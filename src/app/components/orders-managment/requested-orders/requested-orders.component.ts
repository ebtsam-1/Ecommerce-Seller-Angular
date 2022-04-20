import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { OrderService } from 'src/app/services/order.service';
import { Page } from 'src/app/view_model/page';

@Component({
  selector: 'app-requested-orders',
  templateUrl: './requested-orders.component.html',
  styleUrls: ['./requested-orders.component.css']
})
export class RequestedOrdersComponent implements OnInit {

  page:Page={} as Page;
  rows:[]=[];
  ColumnMode = ColumnMode;

  constructor(private order:OrderService) {
    this.page.pageNumber = 1;
    this.page.size = 3;
  }

  ngOnInit(): void {
    this.setPage({ offset: 0 });
  }
  setPage(pageInfo:any) {

    this.page.pageNumber = pageInfo.offset+1;
    this.order.pending(pageInfo.offset+1).subscribe((pagedData:any) => {

      this.page.pageNumber = pagedData.data.current_page-1;
      this.page.size=pagedData.data.per_page
      this.page.totalElements=pagedData.data.total
      this.page.totalPages=pagedData.data.last_page
      this.rows = pagedData.data.data;
    });
  }

}
