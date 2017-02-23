import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ActivityStreamComponent } from './activity-stream.component';

export const routes = [
  { path: '', component: ActivityStreamComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    ActivityStreamComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class ActivityStreamModule {
  static routes = routes;
}
