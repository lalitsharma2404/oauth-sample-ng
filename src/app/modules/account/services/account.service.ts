import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpService} from '@app/core/services/http.service';
import {Constants} from '@app/core/config';
import {GenericDto} from '@app/public/models';
import {LoaderService} from '@app/core/services/loader.service';
import {catchError, tap} from 'rxjs/internal/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {LoginModel} from '@app/modules/account/model/login.model';

@Injectable()
export class AccountService {

  constructor(private loaderService: LoaderService, private httpService: HttpService) {
  }

  /**
   * Login existing user
   * @param {User} authDetails
   * @returns {Observable<GenericDto<string>>}
   */
  login(authDetails: LoginModel): Observable<GenericDto<any>> {
    console.log('AuthDetails : ', authDetails);
    this.loaderService.startLoader(); // start loader before generating HTTP request
    return this.httpService.post<any>(Constants.BASE_URL + Constants.login, authDetails)
      .pipe(tap(() => {
        this.loaderService.stopLoader();  // stop loader when response received
      }), catchError((error: HttpErrorResponse) => {
        this.loaderService.stopLoader();  // stop loader if error
        return throwError(error);
      }));
  }

}
