import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shortcodes-panel',
  templateUrl: './panel.template.html',
  encapsulation: ViewEncapsulation.None
  // host: {
  //   class: 'error-page app'
  // },
})
export class PanelComponent {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }
}
