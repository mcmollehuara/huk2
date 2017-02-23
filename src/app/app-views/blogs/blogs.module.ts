import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BlogsComponent } from './blogs.component';

export const routes = [
  { path: '', component: BlogsComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    BlogsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class BlogsModule {
  static routes = routes;
}
