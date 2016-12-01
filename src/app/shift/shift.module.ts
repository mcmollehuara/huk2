import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// import { ShiftService } from './_services/shift.services';

// import { FilterComponent } from './filter/filter.component';
// import { ScheduleComponent } from './schedule/schedule.component';
// import { SummaryComponent } from './summary/summary.component';

import { ShiftComponent } from './shift.component';

export const routes= [
    {path: '', redirectTo: 'shift', pathMatch: 'full'},
  { path: 'shift', component: ShiftComponent }
];

@NgModule({
    imports: [CommonModule,FormsModule,RouterModule.forChild(routes)],
    exports: [],
    declarations: [ShiftComponent]
})
export class ShiftModule { 
    static routes = routes;
}
