import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private Route:Router) { }

  canActivate( 
    next: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean { 
    if(localStorage.getItem('user')== "true"){ 
      console.log("ftgh");
    this.Route.navigate(["/nav/profile"]);
    // return true; 
    }else{ 
    alert("Please register ") 
    this.Route.navigate(["/register"]); 
    return false; 
    } 
    } 
    
}
