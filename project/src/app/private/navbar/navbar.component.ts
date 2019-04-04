import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../shared/login.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  users:any;
  name:string;
  id:any;
 
  constructor(private service: LoginService) { }

  ngOnInit() {
    this.id=localStorage.getItem('id');
    this.service.login().subscribe(
      (response) =>{ this.users=response
     this.name=this.users[this.id-1].firstName;
      },
      (error) => console.log(error)
    );
    }
  }

