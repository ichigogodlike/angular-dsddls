import { Component, OnInit } from '@angular/core';
import { BankserviceService } from "app/bankservice.service";

@Component({
  selector: 'app-view-all-cust',
  templateUrl: './view-all-cust.component.html',
  styleUrls: ['./view-all-cust.component.css']
})
export class ViewAllCustComponent implements OnInit {

    Customer:any;
  constructor(private service:BankserviceService) { }

  ngOnInit() {
      this.viewCustomer();
  }
  
  private viewCustomer(){
      console.log("view all customer");
      this.service.getCustomers().subscribe(data=>{
          this.Customer=data;
      })
  }

}
