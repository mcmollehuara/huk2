import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TimeLineComponent } from './time-line.component';

export const routes = [
  { path: '', component: TimeLineComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    TimeLineComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class TimeLineModule {
  static routes = routes;
}
