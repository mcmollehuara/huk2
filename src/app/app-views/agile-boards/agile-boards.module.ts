import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AgileBoardsComponent } from './agile-boards.component';

export const routes = [
  { path: '', component: AgileBoardsComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AgileBoardsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class AgileBoardsModule {
  static routes = routes;
}
