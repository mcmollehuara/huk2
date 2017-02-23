import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tour-guided',  
  templateUrl: './tour-guided.template.html',
  encapsulation: ViewEncapsulation.None
  // host: {
  //   class: 'error-page app'
  // },
})
export class TourGuidedComponent {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }
}
