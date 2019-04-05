import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators ,FormArray} from '@angular/forms';
import { LoginService } from "../../shared/login.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  users:any;  //to store response array
  

constructor(private forn_b: FormBuilder, private service: LoginService,private Route:Router) { }

loginForm = this.forn_b.group({
  "email": ['', Validators.email],
  "password": ['', Validators.required],
   })


  ngOnInit() {
//call to login service
      this.service.login().subscribe(
        (response) => this.users=response,
        (error) => console.log(error)
      );
  }

  onSubmit = function() {
    let i,res="no_user";
    
//check if user exist or not
    for(i=0;i<this.users.length;i++){
        if( this.loginForm.value.email==this.users[i].email && this.loginForm.value.password==this.users[i].password ){
          localStorage.setItem("user","true");
          res="user_exist";
          localStorage.setItem("id",this.users[i].id);
          this.Route.navigate(['/nav/profile']);
     
        }
    }
    if(res!="user_exist"){
      alert("invalid email or password");
    }
    
  }


}