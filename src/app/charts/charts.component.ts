import { Component, OnInit } from '@angular/core';
import { RestService } from '../service/rest.service';
// import * as moment from 'moment';
// import { Workbook } from 'exceljs';
// import * as fs from 'file-saver';
// import { StockPrice } from '../entity/stock-price';
// import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor(private restService:RestService) { }

  ngOnInit(): void {
  }
/*
  chartsForm=new FormGroup({name:new FormControl,startDate:new FormControl,endDate:new FormControl});

  chartOptions = {
    responsive: true
  }
  
  labels: string[] =  [];
  labelsWithFullFormat: string[] =  [];
  data: number[] =  [];
  sharesList: Array<StockPrice> = [];
  avgData: number =0;
  minData: number =0;
  maxData: number =0;

  chartData = [
    {
      label: 'Price Per Share(in Rs)',
      data: this.data
    }
  ];

  // CHART COLOR.
  colors = [
    {
      backgroundColor: 'rgba(30, 169, 224, 0.8)'
    }
  ]

  monthsRange(startDate: string, endDate: string) {
    var _startDate = moment(startDate);
    var _endDate = moment(endDate);
    var dates= [];
    _endDate.subtract(1, "month");
    var month = moment(_startDate);
    while( month < _endDate ) {
        month.add(1, "month");
        dates.push(month.format("MMM YYYY"));
    }
    return dates;
  }

  monthsRangeWithFullFormat(startDate: string, endDate: string) {
    var _startDate = moment(startDate);
    var _endDate = moment(endDate);
    var dates= [];
    _endDate.subtract(1, "month");
    var month = moment(_startDate);
    while( month < _endDate ) {
        month.add(1, "month");
        dates.push(month.format("YYYY-MM"));
    }
    return dates;
  }

  onClickSubmit(chartsForm: any) {
    // clearing old data
    this.labels = [];
    this.labelsWithFullFormat = [];
    this.data = [];

    var formData = chartsForm.value;
    var companyName = formData.name;
    var startDate = formData.startDate;
    var endDate = formData.endDate;
    this.labels = this.monthsRange(startDate, endDate);
    this.labelsWithFullFormat = this.monthsRangeWithFullFormat(startDate, endDate)
    var datePriceMap= new Map();

    this.restService.sharesByCompanyName(companyName)
    .subscribe(
      response => {
        if(response===null)
          alert("Company not found");
        else{
          this.sharesList = response;
          for(var i=0; i<response.length; i++)
          {
            var dateStringVal = JSON.stringify(response[i].date).substr(1,7);
            datePriceMap.set(dateStringVal, response[i].sharePrice);
          }
          for(var i=0; i<this.labelsWithFullFormat.length; i++)
          {
            var dateVal = this.labelsWithFullFormat[i];
            this.data.push(datePriceMap.get(dateVal));
          }
          this.chartData[0].data= this.data;
          this.avgData = this.findAvgData(this.data);
          this.minData = this.findMinData(this.data);
          this.maxData = this.findMaxData(this.data);
        }  
        
      },
      error => {
          console.log(error);
        });
  }

  findAvgData(data: number[])
  {
    var sum: number = 0;
    var count: number = 0;
    for(var i=0; i<data.length; i++) {
      if(data[i]!=undefined) {
        sum+= data[i];
        count++;
      }
    } 
    return sum/count;
  }

  findMaxData(data: number[])
  {
    var max: number = -1;
    for(var i=0; i<data.length; i++) {
      if(data[i]!=undefined && data[i]>max) max = data[i];
    } 
    return max;
  }

  findMinData(data: number[])
  {
    var min: number = Number.MAX_SAFE_INTEGER;
    for(var i=0; i<data.length; i++) {
      if(data[i]!=undefined && data[i]<min) min = data[i];
    } 
    return min;
  }

  exportToExcel() {
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('Sheet1');
    worksheet.columns = [
      { header: 'Company Code', key: 'companyCode', width: 17 },
      { header: 'Stock Exchange', key: 'stockExchange', width: 17 },
      { header: 'Price Per Share(in Rs)', key: 'pricePerShare', width: 20 },
      { header: 'Date', key: 'date', width: 20},
      { header: 'Time', key: 'time', width: 10},
    ];
    var filteredList = this.filtersharesListByMonths(this.sharesList);
    filteredList.forEach(share => {
      worksheet.addRow({companyCode: share.companyCode, stockExchange: share.exchangeName, pricePerShare: share.sharePrice,  date: share.date, time: share.time},"n");
    });
    workbook.xlsx.writeBuffer().then((data: any) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, 'shareData.xlsx');
    })
  }

  filtersharesListByMonths(sharesList: Array<StockPrice>): Array<StockPrice> {
    var filteredList: Array<StockPrice> = [];
    for(var i=0; i<sharesList.length; i++) {
      if(this.labelsWithFullFormat.includes(JSON.stringify(sharesList[i].date).substr(1,7))) filteredList.push(sharesList[i]);
    }
    return filteredList;
  }
*/
}
