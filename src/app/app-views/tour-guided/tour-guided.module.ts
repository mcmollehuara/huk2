import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TourGuidedComponent } from './tour-guided.component';

export const routes = [
  { path: '', component: TourGuidedComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    TourGuidedComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class TourGuidedModule {
  static routes = routes;
}
