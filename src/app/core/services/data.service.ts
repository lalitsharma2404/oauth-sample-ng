import {Injectable} from '@angular/core';

@Injectable()
export class DataService {
  /**
   *  User info will be stored in `user` object and it will available in whole application
   *
   */
  public user: any;

  constructor() {
  }
}
