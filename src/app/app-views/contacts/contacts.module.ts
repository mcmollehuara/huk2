import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContactsComponent } from './contacts.component';

export const routes = [
  { path: '', component: ContactsComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    ContactsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class ContactsModule {
  static routes = routes;
}
