import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OverlayComponent } from './input.component';

export const routes = [
  { path: '', component: OverlayComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    OverlayComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class OverlayModule {
  static routes = routes;
}
