import { AlertService } from './alert.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class IncGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService,private alertService:AlertService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('inside CanActivate')

    if (this.authService.getCurrentIncident()) {
      return true;
    }

    this.alertService.warn("Please select an incident ");
    this.router.navigate(['/listIncident']);
    return false;
  }
}
