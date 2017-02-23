import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'project-detail',  
  templateUrl: './project-detail.template.html',
  encapsulation: ViewEncapsulation.None
  // host: {
  //   class: 'error-page app'
  // },
})
export class ProjectDetailComponent {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }
}
