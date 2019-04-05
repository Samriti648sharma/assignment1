import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor(private http: HttpClient) { }

  // call to faq object in db
  fetch_faq() {
    return this.http.get('http://localhost:3000/faq')
    
}
}
