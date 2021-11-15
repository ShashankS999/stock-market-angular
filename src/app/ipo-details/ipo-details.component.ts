import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Ipo } from '../entity/ipo';
import { RestService } from '../service/rest.service';

@Component({
  selector: 'app-ipo-details',
  templateUrl: './ipo-details.component.html',
  styleUrls: ['./ipo-details.component.css']
})
export class IpoDetailsComponent implements OnInit {

  constructor(private restService:RestService) { }

  ipoForm=new FormGroup({name:new FormControl,date:new FormControl,price:new FormControl,shares:new FormControl});
  ipo!:Ipo;

  ngOnInit(): void {
  }

  addIpo(){
    this.ipo=new Ipo(this.ipoForm.value.date,this.ipoForm.value.price,this.ipoForm.value.shares);
    console.log(this.ipo);
    this.restService.addIpo(this.ipo,this.ipoForm.value.name)
      .subscribe(
        response => {
          if(!response)
            alert("Ipo updated");
          else
            alert("Ipo registered");
        },
        error => {
          console.log(error);
        });
  }

}
