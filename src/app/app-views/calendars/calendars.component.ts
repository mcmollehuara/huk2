import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'calendar',  
  templateUrl: './calendars.template.html',
  encapsulation: ViewEncapsulation.None
  // host: {
  //   class: 'error-page app'
  // },
})
export class CalendarsComponent {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }
}
