import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatTableDataSource } from "@angular/material";
import { NewJobDialogPage } from "../new-job-dialog/new-job-dialog.page";
import { ScheduleInterviewDialogPage } from '../schedule-interview-dialog/schedule-interview-dialog.page';
import { ApprovalDialogPage } from "../approval-dialog/approval-dialog.page";
import { OfferDetailsPage } from "../offer-details/offer-details.page";

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.page.html',
  styleUrls: ['./dashboard-view.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardViewPage implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

openDialog(){
 let dialogRef = this.dialog.open(NewJobDialogPage, {
      width: '70%',
      height: '90%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
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
  openApproval(){
    let schedule = this.dialog.open(ApprovalDialogPage, {
      width: '35%',
      height: '80%',
    });
    schedule.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openOffer(){
    let offer = this.dialog.open(OfferDetailsPage, {
      width: '60%',
      height: '80%',
    });
    offer.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}