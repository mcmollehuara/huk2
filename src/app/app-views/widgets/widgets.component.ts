import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'widgets',  
  templateUrl: './widgets.template.html',
  encapsulation: ViewEncapsulation.None
  // host: {
  //   class: 'error-page app'
  // },
})
export class WidgetsComponent {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }
}
