import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ChatsComponent } from './chat.component';

export const routes = [
  { path: '', component: ChatsComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    ChatsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class ChatsModule {
  static routes = routes;
}
