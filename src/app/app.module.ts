import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '@app/app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// ngx module
import {ToastrModule} from 'ngx-toastr';
// Component
import {AppComponent} from '@app/app.component';
import {CoreModule} from '@app/core/core.module';
import {TokenService} from '@app/modules/account/services/token.service';
import {StorageService} from '@app/modules/account/services/storage.service';

// Modules


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [TokenService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
