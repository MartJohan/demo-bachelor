import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  constructor(private readonly router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      /*
      * Shortly summarized, a guard is as it sounds, something that decides whether or not something can access.
      * In this case the guard decides whether or not a use can access the question page.
      * If the use is logged in, he/ she should be allowed access to the questions
      * 
      */

      // If the loggedIn variable exists in sessionStorage, return true and let the user access
      if(sessionStorage.getItem("loggedIn")) {
      // If this returns true then the guard will allow the route to be accessed
        return true;
      }
      // The use is not logged in and therefore is denied access until logged in, navigate them back to the login page and make the guard return false
    this.router.navigate(['/login']);
    return false;
  }
  
}
