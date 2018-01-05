import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { DashboardRouting } from "../../routes/dashboard/dashboard.route";
import { MainPage } from "../../pages/main/main.page";
import { HeaderComponent } from "../../components/header/header.component";
import { DashboardViewPage } from '../../pages/dashboard-view/dashboard-view.page';
import { NewJobDialogPage } from '../../pages/new-job-dialog/new-job-dialog.page';
import {ScheduleModule} from '../schedule/schedule.module';
import { ScheduleInterviewDialogPage } from '../../pages/schedule-interview-dialog/schedule-interview-dialog.page';
import { PositionsListingPage } from '../../pages/positions-listing/positions-listing.page';
import { ViewPositionPage } from '../../pages/view-position/view-position.page';
import { AddResumeDialogPage } from '../../pages/add-resume-dialog/add-resume-dialog.page';
import { ViewCandiateProfilePage } from '../../pages/view-candiate-profile/view-candiate-profile.page';
import { ApprovalDialogPage } from '../../pages/approval-dialog/approval-dialog.page';
import { AddInterviewRoudsDialogPage } from '../../pages/add-interview-rouds-dialog/add-interview-rouds-dialog.page';
import { OnlyLoggedUsersGuard } from '../../guards/only-logged-users.guard';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { JobcreationService } from './../../services/jobcreation/jobcreation.service';
import { FeedbackService } from '../../services/feedback/feedback.service';
import { OfferModule } from "../offer/offer.module";
import { InterviewerFeedbackDialogPage } from '../../pages/interviewer-feedback-dialog/interviewer-feedback-dialog.page';
import { InterviewerFeedbackApprovalDialogPage } from '../../pages/interviewer-feedback-approval-dialog/interviewer-feedback-approval-dialog.page';
import { DashboardService } from '../../services/dashboard/dashboard.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DashboardRouting,
    ScheduleModule,
    OfferModule
  ],
  declarations: [
    MainPage,
    HeaderComponent,
    DashboardViewPage,
    NewJobDialogPage,
    ScheduleInterviewDialogPage,
    PositionsListingPage,
    ViewPositionPage,
    AddResumeDialogPage,
    ViewCandiateProfilePage,
    ApprovalDialogPage,
    AddInterviewRoudsDialogPage,
    InterviewerFeedbackDialogPage,
    InterviewerFeedbackApprovalDialogPage,
  ],
  providers: [ AuthenticationService, OnlyLoggedUsersGuard, JobcreationService, FeedbackService, DashboardService ]
})
export class DashboardModule { }
