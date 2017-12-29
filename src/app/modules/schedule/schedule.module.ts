import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { ScheduleRouting } from '../schedule/schedule.route';
import { ScheduleRouting } from '../../routes/schedule/schedule.route';
//import { ScheduleInterviewDialogPage } from '../../pages/schedule-interview-dialog/schedule-interview-dialog.page';

@NgModule({
  imports: [
    CommonModule,
    ScheduleRouting
  ],
  declarations: []
})
export class ScheduleModule { }
