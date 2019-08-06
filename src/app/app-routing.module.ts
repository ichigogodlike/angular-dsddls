import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoLoginComponent } from './do-login/do-login.component';
import { CreateCustComponent } from './create-cust/create-cust.component';
import { CustDetailComponent } from "app/cust-detail/cust-detail.component";
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPageComponent } from "app/admin-page/admin-page.component";
import { ViewAllCustComponent } from "app/view-all-cust/view-all-cust.component";
import { CustomerupdatepageComponent } from "app/customerupdatepage/customerupdatepage.component";
import { CustomerdeletepageComponent } from "app/customerdeletepage/customerdeletepage.component";
import { CreateAccountComponent } from "app/create-account/create-account.component";
import { ViewAllAccountComponent } from "app/view-all-account/view-all-account.component";
import { AccountdeletepageComponent } from "app/accountdeletepage/accountdeletepage.component";
import { SearchCustomerComponent } from "app/search-customer/search-customer.component";


const routes : Routes=  [
         {path:'customerlogin', component : DoLoginComponent},
         {path:'customercreate', component : CreateCustComponent},
         {path:'customerpage', component:CustDetailComponent},
         {path:'adminlogin', component:AdminLoginComponent},
         {path:'adminpage', component:AdminPageComponent},
         {path:'ViewAllCustomer', component:ViewAllCustComponent},
         {path:'customerupdatepage/:id', component:CustomerupdatepageComponent},
         {path:'customerdeletepage/:id', component:CustomerdeletepageComponent},
         {path:'addaccount', component:CreateAccountComponent},
         {path:'ViewAllaccount', component:ViewAllAccountComponent},
         {path:'searchcustomer', component:SearchCustomerComponent},
         {path:'accountdeletepage/:id', component:AccountdeletepageComponent}
       ];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
        ],
     exports: [
        RouterModule
        ]
})

export class AppRoutingModule{}
export const routingComponents = [DoLoginComponent, CreateCustComponent,CreateAccountComponent,AccountdeletepageComponent,SearchCustomerComponent,CustDetailComponent,CustomerdeletepageComponent,CustomerupdatepageComponent,ViewAllAccountComponent,AdminLoginComponent,AdminPageComponent,ViewAllCustComponent]
