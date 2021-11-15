import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestService } from '../service/rest.service';

@Component({
  selector: 'app-search-company',
  templateUrl: './search-company.component.html',
  styleUrls: ['./search-company.component.css']
})
export class SearchCompanyComponent implements OnInit {

  constructor(private restService:RestService) { }

  companyForm=new FormGroup({name:new FormControl})

  ngOnInit(): void {
  }

  searchCompany(){
    let list=document.getElementById("list");
    if(this.companyForm.value.name===null)
    this.companyForm.value.name="garbageValue";
    this.restService.searchCompany(this.companyForm.value.name)
      .subscribe(
        response => {
          if(response===null)
            alert("Company doesn't exists");
          else
            if(list)
              list.innerHTML="<br><div>Name : "+response.companyName+"</div><div>Turnover : "+response.turnover
              +"</div><div>CEO : "+response.ceo+"</div><div>Board of Directors : "+response.boardOfDirectors
              +"</div><div>Brief : "+response.companyBrief+"</div>";
        },
        error => {
          console.log(error);
        });
  }

}
