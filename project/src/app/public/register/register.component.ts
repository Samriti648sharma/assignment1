import { Component } from '@angular/core';
import {  FormBuilder, Validators ,FormArray} from '@angular/forms';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
// data:Data= {
//   FirstName:"",
//   LastName:"",
//   Email:"",
//   Phone:null,
//   Address:"",
//   Medical_History:"",
//   Password:"",
//   Confirm_Password:""
// };


  
constructor(private fb: FormBuilder, private service: RegisterService,private Route:Router) { }

  profileForm = this.fb.group({
    "firstName": ['', Validators.required],
    "lastName":  ['', Validators.required],
    "email": ['', Validators.required],
    "phone": ['',Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])],
    "address": ['', Validators.required],
    "medical_history": [],
    "password": ['', Validators.required],
    "c_password": ['', Validators.required],

    })

 
  


  ngOnInit() {
  }


  

  onSubmit = function(data) {
    this.service.register(data).subscribe(
      (response) =>{ console.log(response);
        this.Route.navigate(['/nav/profile']);
      localStorage.setItem("user","true")}
        ,
      (error) => console.log(error)
    );
    
  }


}
