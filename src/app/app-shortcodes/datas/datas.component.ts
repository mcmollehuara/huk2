import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'datas',
  templateUrl: './datas.template.html',
  encapsulation: ViewEncapsulation.None
  // host: {
  //   class: 'error-page app'
  // },
})
export class DatasComponent {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }
}
