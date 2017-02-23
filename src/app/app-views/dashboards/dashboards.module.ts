import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardsComponent } from './dashboards.component';

export const routes = [
  { path: '', component: DashboardsComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    DashboardsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class DashboardsModule {
  static routes = routes;
}
