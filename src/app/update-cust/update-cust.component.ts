import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-update-cust',
  templateUrl: './update-cust.component.html',
  styles:[ `input.ng-invalid{border:2px solid red;}
           input.ng-valid{border:2px solid green;}
           input.ng-untouched{border:2px solid blue;}`]
})
export class UpdateCustComponent implements OnInit {
    
    updateForm: FormGroup;
    constructor(private _formBuilder: FormBuilder) { }
ngOnInit() 
{
    this.updateForm=this._formBuilder.group({
        
        name: ['',[Validators.required,Validators.pattern('[A-Z][a-z]')]],
        
        age:['',[Validators.pattern('^[1-9][0-9]{1}$')]],
        email:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
        mobileNo:['',[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]],
        address:this._formBuilder.group({
            street: ['',[Validators.required]],
            city: ['',[Validators.required]],
            state: ['',[Validators.required]],
            pinCode:['',[Validators.required,Validators.pattern('^[1-9][0-9]{5}$')]],
        }),
        
    })
    

}

  

 

}
