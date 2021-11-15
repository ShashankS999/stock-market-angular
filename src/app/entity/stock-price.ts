import { Time } from "@angular/common";

export class StockPrice{
    companyCode:String="";
    exchangeName:String="";
    date!:Date;
    time!:Time;
    sharePrice:Number=0;
}