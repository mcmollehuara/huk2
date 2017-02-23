import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'social-feed',  
  templateUrl: './social-feed.template.html',
  encapsulation: ViewEncapsulation.None
  // host: {
  //   class: 'error-page app'
  // },
})
export class SocialFeedComponent {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }
}
