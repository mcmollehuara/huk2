import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shortcodes-menu',
  templateUrl: './menu.template.html',
  encapsulation: ViewEncapsulation.None
  // host: {
  //   class: 'error-page app'
  // },
})
export class MenuComponent {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }
}
