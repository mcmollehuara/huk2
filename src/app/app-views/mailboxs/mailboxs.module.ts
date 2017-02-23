import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SocialComponent } from './social.component';

export const routes = [
  { path: '', component: SocialComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    SocialComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class SocialModule {
  static routes = routes;
}
