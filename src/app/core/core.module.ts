import {ModuleWithProviders, NgModule} from '@angular/core';
import {LoaderService} from '@app/core/services/loader.service';
import {HttpService} from '@app/core/services/http.service';
import {DataService} from '@app/core/services/data.service';
import {BaseErrorComponent, Error404Component, LoaderComponent} from '@app/core/components';
import {LoaderDirective} from '@app/core/directives/loader.directive';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomMaterialModule} from '@app/core/material.module';
import {RouterModule} from '@angular/router';
import {NgSlimScrollModule, SLIMSCROLL_DEFAULTS} from 'ngx-slimscroll';
import {AuthInterceptor} from '@app/core/interceptors/auth.interceptor';

@NgModule({
  declarations: [LoaderComponent,
    LoaderDirective,
    BaseErrorComponent,
    Error404Component
  ],
  imports: [
    HttpClientModule,
    ToastrModule,
    CommonModule,
    FormsModule,
    CustomMaterialModule,
    RouterModule,
    NgSlimScrollModule,
    ReactiveFormsModule
  ],
  exports: [
    LoaderComponent,
    LoaderDirective,
    CustomMaterialModule,
    NgSlimScrollModule
  ],
  entryComponents: [LoaderComponent]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        DataService,
        LoaderService,
        HttpService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
        },
        {
          provide: SLIMSCROLL_DEFAULTS, useValue: {
            alwaysVisible: false,
            gridOpacity: '0.2', barOpacity: '0.5',
            gridBackground: '#e7e7e7',
            gridWidth: '6',
            gridMargin: '2px 2px',
            barBackground: '#acb1b5',
            barWidth: '6',
            barMargin: '2px 2px'
          }
        }]
    };
  }
}
