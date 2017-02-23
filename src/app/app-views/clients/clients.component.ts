import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'clients',  
  templateUrl: './clients.template.html',
  encapsulation: ViewEncapsulation.None
  // host: {
  //   class: 'error-page app'
  // },
})
export class ClientsComponent {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }
}
