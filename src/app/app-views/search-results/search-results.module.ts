import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SearchResultsComponent } from './search-results.component';

export const routes = [
  { path: '', component: SearchResultsComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    SearchResultsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class SearchResultsModule {
  static routes = routes;
}
