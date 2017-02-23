import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DatasComponent } from './datas.component';

export const routes = [
  { path: '', component: DatasComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    DatasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class DatasModule {
  static routes = routes;
}
