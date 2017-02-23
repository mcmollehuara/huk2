import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'contacts',  
  templateUrl: './contacts.template.html',
  encapsulation: ViewEncapsulation.None
  // host: {
  //   class: 'error-page app'
  // },
})
export class ContactsComponent {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }
}
