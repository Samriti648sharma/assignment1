import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../shared/login.service";
import {  FormBuilder, Validators ,FormArray,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { UpdateService } from './update.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  users:any;
  name:string;
  
  data:any={
    id :'',
  fullName:'',
  phone:null,
  medical_history:"",
  password:'',
  email:'',
  address:'',
  c_password:''
  }

  
  constructor(private service: LoginService,private formb: FormBuilder, private Route:Router, private update_service:UpdateService) { }

  userProfileForm: FormGroup = this.formb.group({
    "fullName": ['', Validators.required],
    "phone":  ['', Validators.required],
    "medical_history": [],
    "email": ['', Validators.required],
    "address": ['', Validators.required]
    })

 

  ngOnInit() {
   this.data.id=localStorage.getItem('id');
  //  console.log(this.data.id);
    this.service.login().subscribe(
      (response) =>{ this.users=response
    //  this.name=this.users[this.id-1].firstName;
    //  console.log(this.name);
    this.data.fullName=this.users[this.data.id-1].firstName + " " + this.users[this.data.id-1].lastName;
    this.data.phone=this.users[this.data.id-1].phone;
    this.data.medical_history=this.users[this.data.id-1].medical_history;
    this.data.email=this.users[this.data.id-1].email;
    this.data.address=this.users[this.data.id-1].address;
 
      },
      (error) => console.log(error)
    );
  

    }

    onSubmit = function(data) {
     
      this.name=this.data.fullName.split(" ");
      this.data.firstName=this.name[0];
      this.data.lastName=this.name[1];

      this.update_service.update(this.data.id,this.data).subscribe(
        (response) =>{ console.log(response);
          window.location.reload();
         },
        (error) => console.log(error)
      );
      
    }
  
  

}
