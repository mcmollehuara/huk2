import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'file-manager',  
  templateUrl: './file-manager.template.html',
  encapsulation: ViewEncapsulation.None
  // host: {
  //   class: 'error-page app'
  // },
})
export class FileManagerComponent {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }
}
