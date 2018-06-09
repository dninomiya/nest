import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoadingService } from '../core/loading.service';
import { AuthService } from '../core/auth.service';
import { User } from '../core/user.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'nest-nav',
  templateUrl: './nest-nav.component.html',
  styleUrls: ['./nest-nav.component.scss']
})
export class NestNavComponent {

  develop = !environment.production;
  user$: Observable<User> = this.authService.user$;
  isPageLoading: Observable<boolean> = this.loadingService.isPageLoading$;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private loadingService: LoadingService,
    private authService: AuthService,
  ) { }

  signOut() {
    this.authService.signOut();
  }

}
