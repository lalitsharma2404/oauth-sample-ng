import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpService} from '@app/core/services/http.service';
import {environment} from '@env/environment';

import {GenericDto} from '@app/public/models';
import {LoaderService} from '@app/core/services/loader.service';
import {catchError, tap} from 'rxjs/internal/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {LoginModel} from '@app/modules/account/model/login.model';

@Injectable()
export class AuthService {

  constructor(private loaderService: LoaderService, private httpService: HttpService) {
  }

  /**
   * Login existing user
   */
  login(authDetails: LoginModel): Observable<GenericDto<string>> {
    this.loaderService.startLoader(); // start loader before generating HTTP request
    return this.httpService.post<any>(environment.apiUrl + 'login', authDetails)
      .pipe(tap(() => {
        this.loaderService.stopLoader();  // stop loader when response received
      }), catchError((error: HttpErrorResponse) => {
        this.loaderService.stopLoader();  // stop loader if error
        return throwError(error);
      }));
  }


  /**
   * Logout user session
   */
  /* logout(): Observable<GenericDto<string>> {
     return this.httpService.postAuth<GenericDto<string>>(environment.apiUrl + logout, null);
   }*/

}
