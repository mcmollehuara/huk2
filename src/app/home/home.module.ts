import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { RouterModule } from '@angular/router';

import { WidgetModule } from '../layout/widget/widget.module';

import { SearchPipe } from './pipes/search.pipe';

import { HomeService } from './services/home.service';
import { HomeComponent } from './home.component.ts';

export const routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }
];


@NgModule({
  imports: [
    CommonModule,
    WidgetModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SearchPipe,
    HomeComponent
  ],
  providers: [HomeService]
})
export default class HomeModule {
  static routes = routes;
}
