import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shortcodes-input',
  templateUrl: './buttons.template.html',
  encapsulation: ViewEncapsulation.None
  // host: {
  //   class: 'error-page app'
  // },
})
export class ButtonsComponent {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }
}
