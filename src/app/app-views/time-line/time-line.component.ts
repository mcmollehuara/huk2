import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'time-line',  
  templateUrl: './time-line.template.html',
  encapsulation: ViewEncapsulation.None
  // host: {
  //   class: 'error-page app'
  // },
})
export class TimeLineComponent {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }
}
