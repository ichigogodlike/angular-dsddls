import { Component, OnInit } from '@angular/core';
import { BankserviceService } from "app/bankservice.service";

@Component({
  selector: 'app-view-all-account',
  templateUrl: './view-all-account.component.html',
  styleUrls: ['./view-all-account.component.css']
})
export class ViewAllAccountComponent implements OnInit {
    Account:any;
  constructor(private service:BankserviceService) { }

  ngOnInit() {
      this.viewAccount();
  }
  
  private viewAccount(){
      console.log("view all customer");
      this.service.getAccounts().subscribe(data=>{
          this.Account=data;
      })
  }

}
