import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AccountComponent} from './account.component';
// components
import {LoginComponent} from './components';
// modules
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import {AccountRoutingModule} from '@app/modules/account/account.routing.module';
import {AccountService} from '@app/modules/account/services/account.service';
import {TokenService} from '@app/modules/account/services/token.service';
import {StorageService} from '@app/modules/account/services/storage.service';
import {CoreModule} from '@app/core/core.module';

@NgModule({
  declarations: [
    AccountComponent,
    LoginComponent
  ],
  exports: [AccountComponent],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    CoreModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    AccountRoutingModule
  ],
  providers: [AccountService, TokenService, StorageService]
})

export class AccountModule {
}
