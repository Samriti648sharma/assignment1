import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private http: HttpClient) { }


  update(id,data: any[]) {
    return this.http.patch('http://localhost:3000/profile/'+id, data)
    
}
}
