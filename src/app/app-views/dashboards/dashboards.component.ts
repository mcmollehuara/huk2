import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboards',  
  templateUrl: './dashboards.template.html',
  encapsulation: ViewEncapsulation.None
  // host: {
  //   class: 'error-page app'
  // },
})
export class DashboardsComponent {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }
}
