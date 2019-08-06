import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl, Validators, FormBuilder} from '@angular/forms';
import { BankserviceService } from "app/bankservice.service";
import {Router, ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styles:[ `input.ng-invalid{border:1px solid red;}
           input.ng-valid{border:1px solid green;}
           input.ng-untouched{border:1px solid #ced4da;}`]
})
export class CreateAccountComponent implements OnInit {

    accountForm: FormGroup;
constructor(private _formBuilder: FormBuilder,private service:BankserviceService, private router:Router, private route:ActivatedRoute) { }
ngOnInit() 
{
    this.accountForm=this._formBuilder.group({
        
        customerId:[],
        accountType: ['',[Validators.required]],
        balance:['',[Validators.required, Validators.pattern('^[1-9][0-9]{3}$')]]
  })
}
    
       
    onSubmit()
    {
       
     
      this.service.createAccount(this.accountForm.value).subscribe(data => {
          if(data>0)
              {
              alert("Account Created! Note the Account Id   "+data);
              this.router.navigate(['/adminlogin']);
              }
          else{
              alert("Registration Failed! Please try Again");
              this.router.navigate(['/adminlogin']);
          }
      },
     
      error =>{
          console.log(error);
      }
      );
    }
  }
