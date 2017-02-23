import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FileManagerComponent } from './file-manager.component';

export const routes = [
  { path: '', component: FileManagerComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    FileManagerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class FileManagerModule {
  static routes = routes;
}
