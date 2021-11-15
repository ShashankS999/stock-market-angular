import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Company } from '../entity/company';
import { RestService } from '../service/rest.service';
import * as XLSX from 'xlsx';
import { StockPrice } from '../entity/stock-price';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private restService:RestService) { }

  companyForm=new FormGroup({name:new FormControl,turnover:new FormControl,ceo:new FormControl,director:new FormControl,sector:new FormControl,brief:new FormControl,exchange:new FormControl});
  company!:Company;

  ngOnInit(): void {
  }

  addCompany(){
    this.company=new Company(this.companyForm.value.name,this.companyForm.value.turnover,this.companyForm.value.ceo,this.companyForm.value.director,this.companyForm.value.brief)
    this.restService.addCompany(this.company,this.companyForm.value.sector,this.companyForm.value.exchange)
      .subscribe(
        response => {
          if(!response)
            alert("Company updated");
          else
            alert("Company registered");
        },
        error => {
          console.log(error);
        });
  }

  deactivateCompany(){
    this.company=new Company(this.companyForm.value.name,this.companyForm.value.turnover,this.companyForm.value.ceo,this.companyForm.value.director,this.companyForm.value.brief)
    this.restService.deactivateCompany(this.company)
      .subscribe(
        response => {
          if(response)
            alert("Company deactivated");
          else
            alert("Company doesn't exist");
        },
        error => {
          console.log(error);
        });
  }

  onFileChange(ev: any) {
    let workBook: any = null;
    let jsonData = null;
    const reader = new FileReader();
    const file = ev.target.files[0];
    reader.onload = (event) => {
      const data = reader.result;
      workBook = XLSX.read(data, { type: 'binary' });
      jsonData = workBook.SheetNames.reduce((initial: any, name: any) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet);
        return initial;
      }, {});
      this.saveStockPrice(this.buildObject(jsonData));
    }
    reader.readAsBinaryString(file);
  }

  saveStockPrice(priceList: Array<StockPrice>) {
    console.log(priceList);
    this.restService.saveStockPrice(priceList,this.companyForm.value.name)
    .subscribe(
      response => {
        if(response)
            alert("Stock prices added");
          else
            alert("Company doesn't exist");
      },
      error => {
        console.log(error);
      });
  }

  buildObject(jsonData: any): Array<StockPrice>{
    var priceList: Array<StockPrice> = [];
    var dataArray = jsonData.Sheet1;
    for(var i=0; i<dataArray.length; i++){
      var price = new StockPrice();
      price.companyCode = dataArray[i]["Company Code"];
      price.exchangeName = dataArray[i]["Stock Exchange"];
      price.sharePrice = dataArray[i]["Price Per Share(in Rs)"];
      price.date = this.excelDateToJSDate(dataArray[i]["Date"]);
      price.time = dataArray[i]["Time"].trim();
      priceList.push(price);
    }
    return priceList;
  }

  excelDateToJSDate(xlSerial: any){
    return new Date(-2209075200000 + (xlSerial - (xlSerial < 61 ? 0 : 1)) * 86400000);
  }

}
