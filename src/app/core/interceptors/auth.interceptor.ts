import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError} from 'rxjs/internal/operators';
import {Observable, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {GenericDto} from '@app/public/models';
import {NotificationConstants} from '../config/index';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router, private toastrService: ToastrService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err instanceof HttpErrorResponse) {
          console.log('error.message', err.error);
          const genericDto: GenericDto<any> = err.error;
          if (this.isUnauthorized(err.status)) {
            this.toastrService.error(genericDto.desc || err.error.message, NotificationConstants.errorTitle, {
              timeOut: 4000,
              onActivateTick: true
            });
            // remove storage data and redirect to login page
            this.router.navigate(['/login']);

            // show error notification
            console.error(`Backend returned code ${genericDto.code || err.error.status}, body was: ${genericDto.desc || err.error}`);
            return throwError(err);
          } else if (this.isInactive(err.status)) {
            return throwError(err);
          } else {
            this.toastrService.error(genericDto.desc || err.error.message, NotificationConstants.errorTitle, {
              timeOut: 4000,
              onActivateTick: true
            });
            return throwError(err);
          }
        }
        return throwError(err);
      })
    );
  }

  private isUnauthorized(status: number): boolean {
    return status === 401;
  }

  private isInactive(status: number): boolean {
    return status === 403;
  }
}
