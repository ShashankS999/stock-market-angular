import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../service/rest.service';
import { User } from '../entity/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private restService:RestService) { }

  usr!:User;
  userForm=new FormGroup({name:new FormControl,email:new FormControl,password:new FormControl,admin:new FormControl});

  ngOnInit(): void {
  }

  addUser(): void {
    this.usr=new User(this.userForm.value.email,this.userForm.value.password,this.userForm.value.name,this.userForm.value.admin)
    this.restService.addUser(this.usr)
      .subscribe(
        response => {
          if(!response)
            alert("User already exists");
          else
            alert("User registered");
        },
        error => {
          console.log(error);
        });
  }

}
