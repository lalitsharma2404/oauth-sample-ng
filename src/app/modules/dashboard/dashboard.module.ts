import { NgModule } from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CoreModule} from '@app/core/core.module';

@NgModule({
  declarations : [DashboardComponent],
  imports : [RouterModule, CoreModule, CommonModule, DashboardRoutingModule],
  exports : [DashboardComponent],
  entryComponents: [DashboardComponent]
})
export class DashboardModule {
}
