import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shortcodes-message',
  
  templateUrl: './message.template.html',
  encapsulation: ViewEncapsulation.None
  // host: {
  //   class: 'error-page app'
  // },
})
export class MessageComponent {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }
}
