import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AnimationsComponent } from './app.component';

export const routes = [
  { path: '', component: AnimationsComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AnimationsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class AnimationsModule {
  static routes = routes;
}
