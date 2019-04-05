import { Component, OnInit } from '@angular/core';
import { BookingsService } from './bookings.service';
import { Router } from '@angular/router';
import { CountBookings } from 'src/app/shared/bookingCount.service';

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

total:number;

  constructor(private service: BookingsService, private service2: BookingsService,private Route:Router, private count: CountBookings) { }

  show(){
    this.upcomingFlag=true;
    this.pastFlag=false;
  }
  showpast(){
    this.upcomingFlag=false;
    this.pastFlag=true;
  }

  ngOnInit() {
    // call to upcoming_bookings onject in db.json
    this.service.upcoming_bookings().subscribe(
      (response) => {this.upcoming=response
     
    },
      (error) => console.log(error)
    );

// call to past_bookings onject in db.json
    this.service2.past_bookings().subscribe(
      (response) =>{ this.past=response
        this.total=this.upcoming.length + this.past.length;
        this.count.count = this.total;
      },
      (error) => console.log(error)
    );
  }

}
