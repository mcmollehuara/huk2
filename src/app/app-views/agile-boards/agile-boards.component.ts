
import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'agile-boards',  
  templateUrl: './agile-boards.template.html',
  encapsulation: ViewEncapsulation.None
  // host: {
  //   class: 'error-page app'
  // },
})
export class AgileBoardsComponent {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }
}
