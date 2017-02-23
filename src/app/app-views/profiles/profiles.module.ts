import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProfilesComponent } from './profiles.component';

export const routes = [
  { path: '', component: ProfilesComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    ProfilesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class ProfilesModule {
  static routes = routes;
}
