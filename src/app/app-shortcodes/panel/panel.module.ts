import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PanelComponent } from './input.component';

export const routes = [
  { path: '', component: PanelComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    PanelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class PanelModule {
  static routes = routes;
}
