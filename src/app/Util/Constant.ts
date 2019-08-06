export class Constant {
    public static IP: string = "localhost";
    public static PORT: string = "8080";
    public static API_URL: string = "http://localhost:8080/BankingSystemD"
    public static AUTH_URL: string = Constant.API_URL + "/AccountController";
    public static CUSTOMER_URL: string = Constant.API_URL + "/CustomerController";
    public static CUST_URL: string = Constant.API_URL + "/CustomerController";
    public static TRANSACTION_URL: string = Constant.API_URL + "/TransactionController";
    public static ACCOUNT_URL: string = Constant.API_URL + "AccountController";
    public static DELETE_CUSTOMER = Constant.CUSTOMER_URL + "/deletecustomer?customerId=";
    public static DELETE_ACCOUNT = Constant.ACCOUNT_URL + "/deleteaccount?accId=";
    public static ADD_CUSTOMER=Constant.CUSTOMER_URL
    public static GET_CUSTOMER = Constant.CUSTOMER_URL + "/getcustomerbyid?customerId=";
    

}
