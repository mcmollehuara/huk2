import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FaqComponent } from './faq.component';

export const routes = [
  { path: '', component: FaqComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    FaqComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class FaqModule {
  static routes = routes;
}
