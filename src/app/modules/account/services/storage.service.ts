import {Injectable} from '@angular/core';
import {remember} from '@app/modules/account/constants/storage.constants';

@Injectable()
export class StorageService {

  private isRememberChecked: boolean;

  constructor() {
  }

  configureStorage(isRemberMeChecked: boolean): void {
    localStorage.setItem(remember, JSON.stringify(isRemberMeChecked));
    this.isRememberChecked = isRemberMeChecked;
  }


  set(key: string, value: any): void {
    if (this.isRememberChecked) {
      localStorage.setItem(key, value);
    } else {
      sessionStorage.setItem(key, value);
    }
  }

  get(key: string, fromLocalStorage?: boolean): string {
    const value: string = this.isRememberChecked || fromLocalStorage ? localStorage.getItem(key) || '' : sessionStorage.getItem(key) || '';
    return value;
  }

  clear(key: string): void {
    if (this.isRememberChecked) {
      localStorage.removeItem(key);
    } else {
      sessionStorage.removeItem(key);
    }
  }

  clearAll(): void {
    localStorage.clear();
    sessionStorage.clear();
  }

}
