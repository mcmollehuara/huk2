import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shortcodes-metric',  
  templateUrl: './metric.template.html',
  encapsulation: ViewEncapsulation.None
  // host: {
  //   class: 'error-page app'
  // },
})
export class metricComponent {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }
}
