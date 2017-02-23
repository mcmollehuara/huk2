import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SocialFeedComponent } from './social-feed.component';

export const routes = [
  { path: '', component: SocialFeedComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    SocialFeedComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class SocialFeedModule {
  static routes = routes;
}
