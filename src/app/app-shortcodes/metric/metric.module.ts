import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MetricComponent } from './input.component';

export const routes = [
  { path: '', component: MetricComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    MetricComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class MenuModule {
  static routes = routes;
}
