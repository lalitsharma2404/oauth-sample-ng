import {Injectable} from '@angular/core';
import {StorageService} from './storage.service';
import {currentUserKey, tokenKey} from '@app/modules/account/constants/storage.constants';

@Injectable()
export class TokenService {
  constructor(private storageService: StorageService) {
  }

  saveToken(token: string): void {
    this.storageService.set(tokenKey, token);
  }

  removeToken(): void {
    this.storageService.clear(tokenKey);
  }

  getToken(): string {
    return this.storageService.get(tokenKey);
  }

  getCurrentUser(): any {
    return this.storageService.get(currentUserKey);
  }

}
