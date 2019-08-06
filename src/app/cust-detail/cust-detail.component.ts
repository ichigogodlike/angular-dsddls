import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl, Validators, FormBuilder} from '@angular/forms';
import { Customer } from "app/Source/Customer";
import { BankserviceService } from "app/bankservice.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cust-detail',
  templateUrl: './cust-detail.component.html',
  styles:[ `input.ng-invalid{border:1px solid red;}
           input.ng-valid{border:1px solid green;}
           input.ng-untouched{border:1px solid #ced4da;}`] 
})
export class CustDetailComponent implements OnInit {
    cid:string;
    
    customers:Customer[]=[];
    userFrom: FormGroup;
    constructor(private _formBuilder: FormBuilder,private service:BankserviceService,private router:Router, private route:ActivatedRoute) { }
    ngOnInit() 
    {
        this.loadallUsers();
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
          
    
        })
        
    
    }
    customer:any

    private loadallUsers(){
    console.log("loadalluser") ;   
    this.cid=localStorage.getItem('customerId');
    console.log(this.cid);
        this.service.getCustomerById(this.cid).subscribe(data=>
        {
            this.customer=data;
            this.userFrom.patchValue(this.customer);
            
        }
        );
        
    }
    onSubmit(){
        console.log(this.userFrom.value);
        this.service.updateCustomer(this.userFrom.value).subscribe(data => {
            if(data!=0)
                {
                alert("Updation Successful!");
                this.router.navigate(['/customerpage']);
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
    
    onDelete(){
        //console.log(this.userFrom.value);
        console.log("delet data");
        this.cid=localStorage.getItem('customerId');
        if(confirm("Are you sure to DELETE ?")){
            this.service.confirmDeleteCustomer(this.cid).subscribe(data => {
                if(data==true)
                    {
                    alert("Deletion Successful!");
                    this.router.navigate(['/customerlogin']);
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