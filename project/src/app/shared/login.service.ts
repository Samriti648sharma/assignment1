import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

// call profile object
  login() {
    return this.http.get('http://localhost:3000/profile')
    
}
}
