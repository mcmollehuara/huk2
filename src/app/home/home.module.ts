import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WidgetModule } from '../layout/widget/widget.module';

import { HomeService } from './services/home.service';
import { HomeComponent } from './home.component.ts';

export const routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }
];


@NgModule({
  imports: [
    CommonModule,
    WidgetModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomeComponent
  ],
  providers: [HomeService]
})
export default class HomeModule {
  static routes = routes;
}
