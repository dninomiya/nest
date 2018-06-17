import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route, CanActivateChild, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map, take, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate, CanActivateChild, CanLoad {

  develop = !environment.production;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.canActivate(route, state);
  }

  canLoad(route: Route) {
    return this.checkLogin().pipe(take(1));
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLogin();
  }

  checkLogin() {
    return this.authService.user$.pipe(
      map(user => user.admin),
    );
  }
}
