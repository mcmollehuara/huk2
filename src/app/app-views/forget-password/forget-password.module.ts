import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ForgetPasswordComponent } from './forget-password.component';

export const routes = [
  { path: '', component: ForgetPasswordComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    ForgetPasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class ForgetPasswordModule {
  static routes = routes;
}
