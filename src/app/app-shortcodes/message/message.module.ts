import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './input.component';

export const routes = [
  { path: '', component: MenuComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class MenuModule {
  static routes = routes;
}
