import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects.component';

export const routes = [
  { path: '', component: ProjectsComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class ProjectsModule {
  static routes = routes;
}
