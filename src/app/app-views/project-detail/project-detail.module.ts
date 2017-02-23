import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProjectDetailComponent } from './project-detail.component';

export const routes = [
  { path: '', component: ProjectDetailComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    ProjectDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class ProjectDetailModule {
  static routes = routes;
}
