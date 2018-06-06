import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoadingService } from '../core/loading.service';
import { AuthService } from '../core/auth.service';
import { User, UserService } from '../core/user.service';

@Component({
  selector: 'nest-nav',
  templateUrl: './nest-nav.component.html',
  styleUrls: ['./nest-nav.component.scss']
})
export class NestNavComponent {

  user$: Observable<User> = this.userService.user$;
  isPageLoading: Observable<boolean> = this.loadingService.isPageLoading$;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private loadingService: LoadingService,
    private authService: AuthService,
    private userService: UserService,
  ) { }

  signOut() {
    this.authService.signOut();
  }

}
