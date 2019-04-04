import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  constructor(private http: HttpClient) { }

  upcoming_bookings() {
    return this.http.get('http://localhost:3000/upcoming')
    
}

  past_bookings() {
    return this.http.get('http://localhost:3000/past')
  
}
}
