import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WidgetsComponent } from './widgets.component';

export const routes = [
  { path: '', component: WidgetsComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    WidgetsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class WidgetsModule {
  static routes = routes;
}
