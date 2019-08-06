import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl, Validators, FormBuilder } from '@angular/forms';
import { BankserviceService } from "app/bankservice.service";
import {Router, ActivatedRoute} from "@angular/router";
import { Customer } from "app/Source/Customer";

@Component({
  selector: 'app-customerupdatepage',
  templateUrl: './customerupdatepage.component.html',
  styleUrls: ['./customerupdatepage.component.css']
})
export class CustomerupdatepageComponent implements OnInit {
    userFrom: FormGroup;
cid:string;
customers:any;
  constructor(private _formBuilder: FormBuilder, private service:BankserviceService, private router:Router, private route:ActivatedRoute        ) { }
sub:any;
  customerId:any;
  ngOnInit() {
      this.userFrom=this._formBuilder.group({
          customerId : [],
          customerName: ['',[Validators.required,Validators.pattern('^[a-z|A-Z]*$')]],
          ssnNo: ['',[Validators.required,Validators.minLength(9), Validators.maxLength(9)]],
          customerAge:['',[Validators.pattern('^[1-9][0-9]{1}$')]],
          customerEmail:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
          customerMobileNo:['',[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]],
          
              street: ['',[Validators.required]],
              city: ['',[Validators.required]],
              state: ['',[Validators.required]],
              pinCode:['',[Validators.required,Validators.pattern('^[1-9][0-9]{5}$')]],
          
      password:['',[Validators.required,Validators.minLength(4), Validators.maxLength(10)]],
      })
      
      
      this.sub=this.route.params.subscribe(data=>{
          this.customerId=data['id'];
          console.log(this.customerId);
          this.loadallUsers();
      })
  }
  
  private loadallUsers(){
      console.log(this.customerId);
          this.service.getCustomerById(this.customerId).subscribe(data=>
          {
              this.customers=data;
              this.userFrom.patchValue(this.customers);
              
          }
          );
          
      }
  
  onSubmit(){
      console.log(this.userFrom.value);
      this.service.updateCustomer(this.userFrom.value).subscribe(data => {
          if(data!=0)
              {
              alert("Updation Successful!");
              this.router.navigate(['/ViewAllCustomer']);
              }
          else{
              alert("Updation Failed! Please try Again");
              //this.router.navigate(['/customercreate']);
          }
      },
     
      error =>{
          console.log(error);
      }
      );
  }

}
