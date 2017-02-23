import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shortcodes-typography',  
  templateUrl: './typography.template.html',
  encapsulation: ViewEncapsulation.None
  // host: {
  //   class: 'error-page app'
  // },
})
export class TypographyComponent {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }
}
