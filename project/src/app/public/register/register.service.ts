import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class RegisterService {

  constructor(private http: HttpClient) { }

// call to profile object
// post data to profile 
  register(data: any[]) {
    return this.http.post('http://localhost:3000/profile', data)
    
}
}
