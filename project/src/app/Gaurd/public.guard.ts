import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicGuard implements CanActivate {

  constructor(private Route:Router) { }
  canActivate( 
    next: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean { 
    
    if(localStorage.getItem('user')=== "true"){
       
   //already exist navigate to profile page
    this.Route.navigate(["/nav/profile"]);
     return false; 
    }else{ 
   //already exist
        return true; 
    } 
    } 
  
}
