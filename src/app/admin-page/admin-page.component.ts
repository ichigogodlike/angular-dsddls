import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
  }
  
  viewAllCustomers(){
      this.router.navigate(['/ViewAllCustomer']);   
  }
  
  addaccount(){
      this.router.navigate(['/addaccount'])
  }
  
  
  viewallaccount(){
      this.router.navigate(['/ViewAllaccount']);   
  }

  
  searchCustomers(){
      this.router.navigate(['/searchcustomer']);
  }
}
