import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'blogs',  
  templateUrl: './blogs.template.html',
  encapsulation: ViewEncapsulation.None
  // host: {
  //   class: 'error-page app'
  // },
})
export class BlogsComponent {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }
}
