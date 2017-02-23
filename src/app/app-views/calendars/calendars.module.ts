import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CalendarsComponent } from './calendars.component';

export const routes = [
  { path: '', component: CalendarsComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    CalendarsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class CalendarsModule {
  static routes = routes;
}
