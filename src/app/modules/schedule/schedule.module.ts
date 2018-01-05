import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { ScheduleRouting } from '../schedule/schedule.route';
import { ScheduleRouting } from '../../routes/schedule/schedule.route';
import { ScheduleInterviewService } from '../../services/schedule-interview/schedule.interview.service';

//import { ScheduleInterviewDialogPage } from '../../pages/schedule-interview-dialog/schedule-interview-dialog.page';

@NgModule({
  imports: [
    CommonModule,
    ScheduleRouting
  ],
  declarations: [],
  providers: [ScheduleInterviewService]
})
export class ScheduleModule { }
