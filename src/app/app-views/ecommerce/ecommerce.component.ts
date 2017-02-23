import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ecommerce',  
  templateUrl: './ecommerce.template.html',
  encapsulation: ViewEncapsulation.None
  // host: {
  //   class: 'error-page app'
  // },
})
export class EcommerceComponent {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }
}
