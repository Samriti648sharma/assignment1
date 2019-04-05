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

//various input fields 
profileForm = this.fb.group({
  "firstName": ['', Validators.required],
  "lastName":  ['', Validators.required],
  "email": ['',Validators.compose([ Validators.required,Validators.email])],
  "phone": ['',Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])],
  "address": ['', Validators.required],
  "medical_history": [],
  "password": ['', Validators.required],
  "c_password": ['', Validators.required],
  }
  )
  
constructor(private fb: FormBuilder, private service: RegisterService,private Route:Router) { }


  ngOnInit() {
  }  

  //call profile object of db on submit
  onSubmit = function(data) {
    this.service.register(data).subscribe(
      (response) =>{ 
      this.Route.navigate(['/login']);
    },
      (error) => console.log(error)
    );
    
  }


}
