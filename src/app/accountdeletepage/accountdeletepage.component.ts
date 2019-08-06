import { Component, OnInit } from '@angular/core';
import { BankserviceService } from "app/bankservice.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-accountdeletepage',
  templateUrl: './accountdeletepage.component.html',
  styleUrls: ['./accountdeletepage.component.css']
})
export class AccountdeletepageComponent implements OnInit {
    
    sub:any;
accountId:any;

  constructor(private service:BankserviceService,private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
      this.sub=this.route.params.subscribe(data=>{
          this.accountId=data['id'];
          console.log(this.accountId);
          this.onDelete();
      })
  }
  
  onDelete(){
      //console.log(this.userFrom.value);
      console.log("delet data");
      if(confirm("Are you sure to DELETE ?")){
          this.service.confirmDeleteAccount(this.accountId).subscribe(data => {
              if(data==true)
                  {
                  alert("Deletion Successful!");
                  this.router.navigate(['/ViewAllaccount']);
                  }
              else{
                  alert("Deletion Failed! Please try Again");
                  this.router.navigate(['/ViewAllaccount']);
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
