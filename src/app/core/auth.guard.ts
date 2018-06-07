import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route, CanActivateChild, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.canActivate(route, state);
  }

  canLoad(route: Route) {
    return this.checkLogin(window.location.pathname);
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string) {
    if (this.authService.isLoggedIn) { return true; }

    if (url !== '/login') {
      this.authService.redirectUrl = url;
    }

    return false;
  }
}
