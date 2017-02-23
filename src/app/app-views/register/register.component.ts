import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'register',  
  templateUrl: './register.template.html',
  encapsulation: ViewEncapsulation.None
  // host: {
  //   class: 'error-page app'
  // },
})
export class RegisterComponent {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }
}
