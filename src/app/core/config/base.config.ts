import {environment} from '@env/environment';


export class Constants {
  /**
   * Define base url for api endpoints
   */
  public static readonly BASE_URL = environment.apiUrl;

  /**
   *  Define endpoints here for auth APIs
   */
  public static readonly login = 'public/api/v1/login';
  /*public static readonly logout = 'user/logout';
  public static readonly register = 'public/register';*/
}
