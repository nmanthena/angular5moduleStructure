import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatTableDataSource } from "@angular/material";
import { NewJobDialogPage } from "../new-job-dialog/new-job-dialog.page";
import { ScheduleInterviewDialogPage } from '../schedule-interview-dialog/schedule-interview-dialog.page';
import { ApprovalDialogPage } from "../approval-dialog/approval-dialog.page";
import { OfferDetailsPage } from "../offer-details/offer-details.page";
import { DashboardService } from '../../services/dashboard/dashboard.service';
import { InterviewerFeedbackDialogPage } from '../interviewer-feedback-dialog/interviewer-feedback-dialog.page';
import { InterviewerFeedbackApprovalDialogPage } from '../interviewer-feedback-approval-dialog/interviewer-feedback-approval-dialog.page';
import { OfferApprovalDialogPage } from "../offer-approval-dialog/offer-approval-dialog.page";
import { OfferDetailsViewDialogPage } from "../offer-details-view-dialog/offer-details-view-dialog.page";
import { JobcreationService } from './../../services/jobcreation/jobcreation.service';
import { StoreService } from '../../services/store/store.service';
@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.page.html',
  styleUrls: ['./dashboard-view.page.scss'],
  encapsulation: ViewEncapsulation.None,
  providers:[DashboardService]
})
export class DashboardViewPage implements OnInit {
  private pending:any[];
  private active:any[];
  private inActive:any[];
  constructor(public dialog: MatDialog,
  private dServe: DashboardService,
  private jobcreationService: JobcreationService,
  private storeService: StoreService
  ) {
    this.getAllPositions();
   }

  ngOnInit() {
    this.active = [];
    this.pending = [];
    this.inActive = [];
  }
getAllPositions(){
  this.dServe.getAllPositions().subscribe(data => {
    this.active = data.response.filter(data => data.status === 1);
    this.pending = data.response.filter(data => data.status === 2);
    this.inActive = data.response.filter(data => data.status === 3);
  }, error => {
    console.log(error);
  })
}
openDialog(){
 let dialogRef = this.dialog.open(NewJobDialogPage, {
      width: '70%',
      height: '90%',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllPositions();
    });
  }
  openAddSchedulDialog(){
    let schedule = this.dialog.open(ScheduleInterviewDialogPage, {
      width: '70%',
      height: '90%',
    });
    schedule.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openApproval(recruitementId: number){
    // recruitementId = 2;
    this.jobcreationService.getJobInfo({ recruitementId: recruitementId }).subscribe(res => {
      if ( res.status === 1) {
        // this.jobInfo = res.response;
        const schedule = this.dialog.open(ApprovalDialogPage, {
          width: '50%',
          height: '90%',
          data: {jobinfo: res.response[0][0], skillsinfo: res.response[1][0]}
        });
        schedule.afterClosed().subscribe(result => {
         this.getAllPositions();
        });
      }
    });
  }
  openOffer(){
    let offer = this.dialog.open(OfferDetailsPage, {
      width: '60%',
      height: '90%',
    });
    offer.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  offerApproval(){
    let offer = this.dialog.open(OfferApprovalDialogPage, {
      width: '60%',
      height: '90%',
    });
    offer.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  offerView(){
    let offer = this.dialog.open(OfferDetailsViewDialogPage, {
      width: '60%',
      height: '90%',
    });
    offer.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openFeedback(){
    let feedback = this.dialog.open(InterviewerFeedbackDialogPage, {
      width: 'auto',
      height: '90%',
    });
    feedback.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openFeedbackApproval(){
    let feedbackApproval = this.dialog.open(InterviewerFeedbackApprovalDialogPage, {
      width: 'auto',
      height: '90%',
    });
    feedbackApproval.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}