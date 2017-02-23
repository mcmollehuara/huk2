import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pin-board',  
  templateUrl: './pin-board.template.html',
  encapsulation: ViewEncapsulation.None
  // host: {
  //   class: 'error-page app'
  // },
})
export class PinBoardComponent {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }
}
