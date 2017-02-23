import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'search-results',  
  templateUrl: './search-results.template.html',
  encapsulation: ViewEncapsulation.None
  // host: {
  //   class: 'error-page app'
  // },
})
export class SearchResultsComponent {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }
}
