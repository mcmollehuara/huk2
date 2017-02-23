import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ClientsComponent } from './clients.component';

export const routes = [
  { path: '', component: ClientsComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    ClientsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class ClientsModule {
  static routes = routes;
}
