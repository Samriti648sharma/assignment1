import { Component, OnInit } from '@angular/core';
import { BookingsService } from './bookings.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {
upcoming:any;
past:any;
upcomingFlag: boolean = true;
pastFlag: boolean;

  constructor(private service: BookingsService, private service2: BookingsService,private Route:Router) { }

  show(){
    this.upcomingFlag=true;
    this.pastFlag=false;
  }
  showpast(){
    this.upcomingFlag=false;
    this.pastFlag=true;
  }

  ngOnInit() {
    this.service.upcoming_bookings().subscribe(
      (response) => {this.upcoming=response
      console.log(this.upcoming);
    },
      (error) => console.log(error)
    );


    this.service2.past_bookings().subscribe(
      (response) =>{ this.past=response
        console.log(this.past);
      },
      (error) => console.log(error)
    );
  }

}
