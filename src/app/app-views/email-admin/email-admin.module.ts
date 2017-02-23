import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EmailAdminComponent } from './email-admin.component';

export const routes = [
  { path: '', component: EmailAdminComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    EmailAdminComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class EmailAdminModule {
  static routes = routes;
}
