import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl, Validators, FormBuilder } from '@angular/forms';
import { BankserviceService } from "app/bankservice.service";
import {Customer} from "app/Source/Customer";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-create-cust',
  templateUrl: './create-cust.component.html',
  styles:[ `input.ng-invalid{border:1px solid red;}
           input.ng-valid{border:1px solid green;}
           input.ng-untouched{border:1px solid #ced4da;}`] 
})
export class CreateCustComponent implements OnInit {
    
    userFrom: FormGroup;
customer:Customer;

    constructor(private _formBuilder: FormBuilder,            private service:BankserviceService, private router:Router, private route:ActivatedRoute) { }
    ngOnInit() 
    {
        this.userFrom=this._formBuilder.group({
            
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
        
    
    }
    onSubmit(){
        
       
        this.customer=this.userFrom.value;
       
        this.service.addCustomer(this.userFrom.value).subscribe(data => {
            if(data>0)
                {
                alert("Registration Successful! Note the Customer Id   "+data);
                this.router.navigate(['/customerlogin']);
                }
            else{
                alert("Registration Failed! Please try Again");
                this.router.navigate(['/customercreate']);
            }
        },
       
        error =>{
            console.log(error);
        }
        );
}
}.3