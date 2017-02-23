import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lockscreen',  
  templateUrl: './social.template.html',
  encapsulation: ViewEncapsulation.None
  // host: {
  //   class: 'error-page app'
  // },
})
export class SocialComponent {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }
}
