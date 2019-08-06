import { Component, OnInit } from '@angular/core';
import { BankserviceService } from "app/bankservice.service";
import {Router, ActivatedRoute} from "@angular/router";
import {FormGroup , FormControl, Validators, FormBuilder} from '@angular/forms';


 
@Component({
  selector: 'app-do-login',
  templateUrl: './do-login.component.html',
  styles:[ `input.ng-invalid{border:1px solid red;}
           input.ng-valid{border:1px solid green;}
           input.ng-untouched{border:1px solid #ced4da;}`]
})
export class DoLoginComponent implements OnInit {
    
    loginForm: FormGroup;


constructor(private _formBuilder: FormBuilder,   private service:BankserviceService, private router:Router, private route:ActivatedRoute ) { }
ngOnInit(){
    
    this.loginForm=this._formBuilder.group({
        
        customerId: ['',[Validators.required]],
        password: ['',[Validators.required]],
        
        })
  }
  
  onSubmit(){
    this.service.login(this.loginForm.value).subscribe(data=>{
        //console.log(data);
        if(data>0){
            console.log(data);
            localStorage.setItem('customerId',data);
            //alert(localStorage.getItem('customerId'));
            this.router.navigate(['/customerpage']);
            
        }
        else{
            alert("invalid credential");
                        this.router.navigate(['/customerlogin']);
        }
    });
  }

}
