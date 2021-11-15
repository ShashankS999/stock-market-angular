import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StockExchange } from '../entity/stock-exchange';
import { RestService } from '../service/rest.service';

@Component({
  selector: 'app-stock-exchange',
  templateUrl: './stock-exchange.component.html',
  styleUrls: ['./stock-exchange.component.css']
})
export class StockExchangeComponent implements OnInit {

  constructor(private restService:RestService) { }

  stock!:StockExchange;
  stockForm=new FormGroup({name:new FormControl,brief:new FormControl});
  myStock=[""]

  ngOnInit(): void {
  }

  addStockExchange(){
    this.stock=new StockExchange(this.stockForm.value.name,this.stockForm.value.brief)
    this.restService.addStockExchange(this.stock)
      .subscribe(
        response => {
          if(!response)
            alert("Stock Exchange already exists");
          else
            alert("Stock Exchange registered");
        },
        error => {
          console.log(error);
        });
  }

  listStockExchange(){
    let list=document.getElementById("list");
    this.restService.listStockExchange()
      .subscribe(
        response => {
          if(list)
          {
            list.innerHTML="";
            for(var i=0;i<response.length;i++)
            list.innerHTML+="<div>"+response[i].name+" : "+response[i].brief+"</div><br>";
          }
        },
        error => {
          console.log(error);
        });
  }

}
