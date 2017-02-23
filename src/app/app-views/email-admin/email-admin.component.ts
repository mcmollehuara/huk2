import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'email-admin',  
  templateUrl: './email-admin.template.html',
  encapsulation: ViewEncapsulation.None
  // host: {
  //   class: 'error-page app'
  // },
})
export class EmailAdminComponent {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }
}
