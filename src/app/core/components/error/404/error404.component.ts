import {Component} from '@angular/core';
import {BaseErrorComponent} from '@app/core/components/error/base/base-error.component';

@Component({
  templateUrl: './error404.component.html'
})

export class Error404Component extends BaseErrorComponent {
  constructor() {
    super();
  }
}
