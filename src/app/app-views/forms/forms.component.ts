import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'forms',  
  templateUrl: './forms.template.html',
  encapsulation: ViewEncapsulation.None
  // host: {
  //   class: 'error-page app'
  // },
})
export class FormsComponent {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }
}
