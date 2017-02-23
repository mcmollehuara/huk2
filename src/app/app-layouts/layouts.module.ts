import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutsComponent } from './layouts.component';

export const routes = [
  { path: '', component: LayoutsComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    LayoutsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class LayoutsModule {
  static routes = routes;
}
