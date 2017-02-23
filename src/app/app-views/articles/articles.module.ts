import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ArticlesComponent } from './articles.component';

export const routes = [
  { path: '', component: ArticlesComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    ArticlesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class ArticlesModule {
  static routes = routes;
}
