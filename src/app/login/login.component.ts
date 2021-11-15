import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../service/rest.service';
import { User } from '../entity/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private restService:RestService,private route:Router) { }

  usr!:User;
  loginForm=new FormGroup({email:new FormControl,password:new FormControl});
  
  ngOnInit(): void {
  }

  login(): void {
    this.usr=new User(this.loginForm.value.email,this.loginForm.value.password)
    this.restService.login(this.usr)
      .subscribe(
        response => {
          if(response==="")
            alert("Invalid User");
          else if(response==="Admin")
            this.route.navigate(['admin']);
          else if(response==="User")
          this.route.navigate(['user']);
        },
        error => {
          console.log(error);
        });
  }

}
