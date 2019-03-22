import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Error404Component} from '@app/core/components';

const routes: Routes = [
  {path: '', loadChildren: '@app/modules/account/account.module#AccountModule'},
  {path: '', loadChildren: '@app/modules/dashboard/dashboard.module#DashboardModule'},
  {path: '**', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
