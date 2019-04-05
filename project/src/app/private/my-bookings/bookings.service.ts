import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  constructor(private http: HttpClient) { }

  //call to upcoming object in db
  upcoming_bookings() {
    return this.http.get('http://localhost:3000/upcoming')
    
}
//call to past object in bd
  past_bookings() {
    return this.http.get('http://localhost:3000/past')
  
}
}
