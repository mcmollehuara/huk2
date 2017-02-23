import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shortcodes-input',
  templateUrl: './miscellaneous.template.html',
  encapsulation: ViewEncapsulation.None
  // host: {
  //   class: 'error-page app'
  // },
})
export class MiscellaneousComponent {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }
}
