import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Injectable()
export class OnlyLoggedUsersGuard implements CanActivate {
  constructor(private authUser : AuthenticationService, private router : Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.authUser.getToken().map(data => {
        if(!data.token){
          this.router.navigate(['/login']);
        }else{
          return true;
        }
      });  
  }
}
