import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../shared/login.service";

import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { CountBookings } from 'src/app/shared/bookingCount.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  count= this.countbookings.count;
  users:any;
  name:string;
  id:any;
  header: string;
  logout(){
    localStorage.clear();
    this.route.navigate(['/login']);
  }
 
  constructor(private service: LoginService,public route:Router, private countbookings: CountBookings) {
    route.events.subscribe( (event) => ( event instanceof NavigationEnd ) && this.handleRouteChange() )
   }

  ngOnInit() {
    //get name of active user
    this.id=localStorage.getItem('id');
    this.service.login().subscribe(
      (response) =>{ this.users=response
     this.name=this.users[this.id-1].firstName+" "+this.users[this.id-1].lastName;

      },
      (error) => console.log(error)
    );
    }
    //dynamically changing name of active component
    handleRouteChange = () => { 
      if (this.route.url.includes('profile')) { 
      this.header = "PROFILE"; 
      } 
      if (this.route.url.includes('booking')) { 
      this.header = "MY BOOKINGS"; 
      } 
      if (this.route.url.includes('faq')) { 
      this.header = "FAQs"; 
      } 
      };
  }

