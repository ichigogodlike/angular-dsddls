import { Component, OnInit } from '@angular/core';
import { BankserviceService } from "app/bankservice.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-customerdeletepage',
  templateUrl: './customerdeletepage.component.html',
  styleUrls: ['./customerdeletepage.component.css']
})
export class CustomerdeletepageComponent implements OnInit {
    
    sub:any;
    customerId:any;

  constructor(private service:BankserviceService,private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
      
      this.sub=this.route.params.subscribe(data=>{
          this.customerId=data['id'];
          console.log(this.customerId);
          this.onDelete();
      })
      
  }

  onDelete(){
      //console.log(this.userFrom.value);
      console.log("delet data");
      if(confirm("Are you sure to DELETE ?")){
          this.service.confirmDeleteCustomer(this.customerId).subscribe(data => {
              if(data==true)
                  {
                  alert("Deletion Successful!");
                  this.router.navigate(['/ViewAllCustomer']);
                  }
              else{
                  alert("Deletion Failed! Please try Again");
                  //this.router.navigate(['/customercreate']);
              }
          },
         
          error =>{
              console.log(error);
          }
          );
      }
      
  }
}
