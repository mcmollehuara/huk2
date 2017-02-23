import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shortcodes-input',
  styleUrls: ['./input.style.scss'],
  templateUrl: './input.template.html',
  encapsulation: ViewEncapsulation.None
  // host: {
  //   class: 'error-page app'
  // },
})
export class ShortcodesInputComponent {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }
}
