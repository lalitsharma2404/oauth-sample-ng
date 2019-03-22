import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {LoaderDirective} from '@app/core/directives/loader.directive';
import {LoaderService} from '@app/core/services';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild(LoaderDirective) loadDirective: LoaderDirective;

  constructor(private loadServices: LoaderService,              router: Router) {
    router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        console.log('router url ', e.url);
      }
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.loadServices.setViewRef(this.loadDirective.viewContainerRef);
  }

}
