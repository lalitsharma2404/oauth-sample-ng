import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  private tokenService: any;

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    /* const token: string = this.tokenService.getToken();*/
    const token = '';
    console.log(token.length);
    if (token.length > 0) {
      console.log(state.url);
      this.performRouting(state.url);
      return true;
    } else {
      if (state.url !== '/login') {
        this.router.navigate(['/login']);
      } else {
        return true;
      }
    }
    return false;

  }

  private performRouting(routeRoot: string): void {
    console.log(routeRoot);
    if (routeRoot === '/' || routeRoot === '/login') {
      this.router.navigate(['/dashboard']);
    }
  }

}
