import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrivateGuard implements CanActivate {

  constructor(private Route:Router) { }
  canActivate( 
    next: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot):  boolean { 
    if(localStorage.getItem('user')==="true"){ 
     
      //already exist no registration page should be shown
     return true; 
    }else{ 
  //does not exist 
    this.Route.navigate(['/register']);
    return true; 
    } 
    } 
  
}
