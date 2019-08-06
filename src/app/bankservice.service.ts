import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import {Customer} from "app/Source/Customer";
import {Account} from "app/Source/Account";
import {UResponse} from "app/Util/Response";
import { Constant } from "app/Util/Constant";

@Injectable()
export class BankserviceService {

  constructor(private http:HttpClient) { }
  
  //add customer
  addCustomer(customer:Customer):Observable<any>{
//      let header = new Headers();
//     
//      header.append("Access-Control-Allow-Origin", "*");
      console.log(customer);
      return this.http.post('http://localhost:8080/BankingSystemD/CustomerController/insertcustomer',customer);
    }
  login(l):Observable<any>{
      return this.http.post<any>('http://localhost:8080/BankingSystemD/CustomerController/login',l);
      
        
      
  }


  //searching particular customer
  getCustomerById(customerId):Observable<any>{
      //return this.http.get(Constant.CUST_URL+"/getcustomerbyid?customerId="+customerId).map(( res: Response ) => res.json())
      console.log(customerId);
      return this.http.get('http://localhost:8080/BankingSystemD/CustomerController/getcustomerbyid/'+customerId);
  }
  
  
  searchCustomer(customer):Observable<any>{
      console.log(customer);
      return this.http.get('http://localhost:8080/BankingSystemD/CustomerController/searchcustomer/'+customer.customerId);
  }
  
  // all customer list
  getCustomers(): Observable<any> {
      //return this.http.get( Constant.CUSTOMER_URL + "/getallcustomers?filter_option=" + filter_option+ "&filter_text=" + filter_text ).map(( res: Response ) => res.json() );
      return this.http.get('http://localhost:8080/BankingSystemD/CustomerController/getallcustomers');
  }

  //update customer
  updateCustomer(customer:Customer):Observable<any>{
      //return  this.http.put(Constant.CUSTOMER_URL + "/updatecustomer",customer).map(( res:Response ) =>res.json());
      return this.http.put('http://localhost:8080/BankingSystemD/CustomerController/updatecustomer',customer);
  }
  
  //delete customer 
  confirmDeleteCustomer( customerId ): Observable<any> {
      return this.http.get('http://localhost:8080/BankingSystemD/CustomerController/deletecustomer/'+customerId);
  }
  
  createAccount(account:Account):Observable<any>{
      console.log("account create");
      console.log(account);
      return this.http.post('http://localhost:8080/BankingSystemD/CustomerController/insertaccount',account);
  }
  
  
    getAccounts(): Observable<any> {
        return this.http.get('http://localhost:8080/BankingSystemD/CustomerController/getallaccount'); 
    }

    getAccountById(accId:string):Observable<UResponse>{
        return this.http.get(Constant.ACCOUNT_URL+"/getaccountbyid?accId="+accId).map(( res: Response ) => res.json())
    }
    
    confirmDeleteAccount( accountId ): Observable<any> {
        return this.http.get('http://localhost:8080/BankingSystemD/CustomerController/deleteaccount/'+accountId);
    }

}





