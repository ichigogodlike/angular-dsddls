import { Component } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LoginComponent} from './login/login.component';
import {DoLoginComponent} from './do-login/do-login.component';
import { CreateCustComponent } from './create-cust/create-cust.component';
import { RouterModule , Routes} from '@angular/router';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { BankserviceService } from "app/bankservice.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BankserviceService]
})
export class AppComponent {
  title = 'app works!';
  something = "Hello World";
  
}
