import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TokenService} from '@app/modules/account/services/token.service';


@Injectable()
export class HttpService {

  constructor(private http: HttpClient, private tokenService: TokenService) {
  }

  public get<T>(url: string): Observable<T> {
    return this.http.get<T>(url, {headers: this.getHeaders()});
  }

  public getAuth<T>(url: string): Observable<T> {
    return this.http.get<T>(url, {headers: this.getAuthHeaders()});
  }

  public post<T>(url: string, data: any): Observable<T> {
    return this.http.post<T>(url, data, {headers: this.getHeaders()});
  }

  public deleteAuth<T>(url: string): Observable<T> {
    return this.http.delete(url, {headers: this.getAuthHeaders()}) as Observable<T>;
  }

  public getHeaders(): HttpHeaders {
    return new HttpHeaders({'Content-Type': 'application/json'});
  }

  public postAuth<T>(url: string, data: any): Observable<T> {
    return this.http.post<T>(url, data, {headers: this.getAuthHeaders()});
  }

  public putAuth<T>(url: string, data: any): Observable<T> {
    return this.http.put<T>(url, data, {headers: this.getAuthHeaders()});
  }

  private getAuthHeaders(): HttpHeaders {
    const headerSettings: { [name: string]: string | string[]; } = {};
    const basicHeaders = new HttpHeaders({});
    for (const key of basicHeaders.keys()) {
      headerSettings[key] = basicHeaders.getAll(key);
    }
    console.log('Auth ', this.tokenService.getToken());
    headerSettings['Authorization'] = this.tokenService.getToken();
    const headers = new HttpHeaders(headerSettings);
    return headers;
  }
}

