import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountComponent} from './account.component';
import {LoginComponent} from './components';

export const routes: Routes = [
  {
    'path': '',
    'component': AccountComponent,
    'children': [
      {'path': '', 'component': LoginComponent, 'pathMatch': 'full'},
      {'path': 'login', 'component': LoginComponent, 'pathMatch': 'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AccountRoutingModule {
}
