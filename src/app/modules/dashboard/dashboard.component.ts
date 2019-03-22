import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';

import {MediaObserver} from '@angular/flex-layout';
import {Router} from '@angular/router';
import {DataService} from '@app/core/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, OnDestroy {
  constructor(private renderer: Renderer2, private media: MediaObserver,
              public router: Router, private dataService: DataService) {

  }

  ngOnInit() {

  }

  onOpened() {

  }

  onClosed() {

  }

  ngOnDestroy() {

  }
}
