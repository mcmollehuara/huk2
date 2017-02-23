import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'forget-password',  
  templateUrl: './forget-password.template.html',
  encapsulation: ViewEncapsulation.None
  // host: {
  //   class: 'error-page app'
  // },
})
export class ForgetPasswordComponent {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }
}
