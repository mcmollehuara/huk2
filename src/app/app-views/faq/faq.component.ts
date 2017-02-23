import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'faq',  
  templateUrl: './faq.template.html',
  encapsulation: ViewEncapsulation.None
  // host: {
  //   class: 'error-page app'
  // },
})
export class FaqComponent {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }
}
