import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shortcodes-overlay',  
  templateUrl: './overlay.template.html',
  encapsulation: ViewEncapsulation.None
  // host: {
  //   class: 'error-page app'
  // },
})
export class OverlayComponent {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }
}
