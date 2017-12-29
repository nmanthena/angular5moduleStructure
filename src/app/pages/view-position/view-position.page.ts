import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddResumeDialogPage } from '../add-resume-dialog/add-resume-dialog.page';
import { NewJobDialogPage } from '../new-job-dialog/new-job-dialog.page';
import { ViewCandiateProfilePage } from '../view-candiate-profile/view-candiate-profile.page';
import { AddInterviewRoudsDialogPage } from '../add-interview-rouds-dialog/add-interview-rouds-dialog.page';

@Component({
  selector: 'app-view-position',
  templateUrl: './view-position.page.html',
  styleUrls: ['./view-position.page.css']
})
export class ViewPositionPage implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  addCandidate(){
    let addResume = this.dialog.open(AddResumeDialogPage, {
      width: '60%',
      height: '90%',
    });

    addResume.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  modifyJd(){
    let modifyJd = this.dialog.open(NewJobDialogPage, {
      width: '60%',
      height: '90%',
    });

    modifyJd.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  viewProfile(){
    let viewProfile = this.dialog.open(ViewCandiateProfilePage, {
      width: '60%',
      height: '90%',
    })
    viewProfile.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  addInterviewRounds(){
    let viewProfile = this.dialog.open(AddInterviewRoudsDialogPage, {
      width: '60%',
      height: '90%',
    })
    viewProfile.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
