import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MiscellaneousComponent } from './miscellaneousComponent.component';

export const routes = [
  { path: '', component: MiscellaneousComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    MiscellaneousComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class MiscellaneousModule {
  static routes = routes;
}
