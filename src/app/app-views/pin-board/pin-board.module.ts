import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PinBoardComponent } from './pin-board.component';

export const routes = [
  { path: '', component: PinBoardComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    PinBoardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class PinBoardModule {
  static routes = routes;
}
