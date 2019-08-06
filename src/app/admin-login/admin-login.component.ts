

import { Component, OnInit } from '@angular/core';
import { BankserviceService } from "app/bankservice.service";
import {Router, ActivatedRoute} from "@angular/router";
import {FormGroup , FormControl, Validators, FormBuilder} from '@angular/forms';


 
@Component({
    selector: 'app-admin-login',
    templateUrl: './admin-login.component.html',
  styles:[ `input.ng-invalid{border:1px solid red;}
           input.ng-valid{border:1px solid green;}
           input.ng-untouched{border:1px solid #ced4da;}`]
})
export class AdminLoginComponent implements OnInit {
    
    adminForm: FormGroup;
    customerId:String;
    password:string;
   

constructor(private _formBuilder: FormBuilder,   private service:BankserviceService, private router:Router, private route:ActivatedRoute ) { }
ngOnInit(){
    
    this.adminForm=this._formBuilder.group({
        
        customerId: ['',[Validators.required]],
        password: ['',[Validators.required]],
        
        })
  }
  
  onSubmit(){
   if(this.customerId=="111" && this.password=="admin"){
       this.router.navigate(['/adminpage']);
   }
   else{
       alert("Please provide right credentials");
   }
  }

}

