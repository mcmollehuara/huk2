import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ShortcodesInputComponent } from './input.component';

export const routes = [
  { path: '', component: ShortcodesInputComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    ShortcodesInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class ShortcodeInputModule {
  static routes = routes;
}
