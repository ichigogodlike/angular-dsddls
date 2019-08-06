import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AppRoutingModule} from './app-routing.module';
import { routingComponents} from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { BankserviceService } from 'app/bankservice.service';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ViewAllCustComponent } from './view-all-cust/view-all-cust.component';
import { CustomerupdatepageComponent } from './customerupdatepage/customerupdatepage.component';
import { CustomerdeletepageComponent } from './customerdeletepage/customerdeletepage.component';
import { ViewAllAccountComponent } from './view-all-account/view-all-account.component';
import { AccountdeletepageComponent } from './accountdeletepage/accountdeletepage.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';






@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    routingComponents,
    AdminLoginComponent,
    AdminPageComponent,
    ViewAllCustComponent,
    CustomerupdatepageComponent,
    CustomerdeletepageComponent,
    ViewAllAccountComponent,
    AccountdeletepageComponent,
    SearchCustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
    ],
    
  providers: [BankserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
