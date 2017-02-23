import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ButtonsComponent } from './buttons.component';

export const routes = [
  { path: '', component: ButtonsComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    ButtonsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class ButtonsModule {
  static routes = routes;
}
