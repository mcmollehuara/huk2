import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'layouts',
  templateUrl: './layouts.template.html',
  encapsulation: ViewEncapsulation.None
  // host: {
  //   class: 'error-page app'
  // },
})
export class LayoutsComponent {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }
}
