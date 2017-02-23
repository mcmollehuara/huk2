import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EcommerceComponent } from './ecommerce.component';

export const routes = [
  { path: '', component: EcommerceComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    EcommerceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class EcommerceModule {
  static routes = routes;
}
