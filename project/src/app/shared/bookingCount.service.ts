import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
//to display bookings count
export class CountBookings {
    count: number = 0;
}