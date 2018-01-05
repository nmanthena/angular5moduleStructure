import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddResumeDialogPage } from '../add-resume-dialog/add-resume-dialog.page';
import { NewJobDialogPage } from '../new-job-dialog/new-job-dialog.page';
import { ViewCandiateProfilePage } from '../view-candiate-profile/view-candiate-profile.page';
import { AddInterviewRoudsDialogPage } from '../add-interview-rouds-dialog/add-interview-rouds-dialog.page';
import { DashboardService } from '../../services/dashboard/dashboard.service';
import {Router,ActivatedRoute} from "@angular/router";
import { error } from 'util';
@Component({
  selector: 'app-view-position',
  templateUrl: './view-position.page.html',
  styleUrls: ['./view-position.page.css']
})
export class ViewPositionPage implements OnInit {
  private singlePosDetails:any;
  private candidates:any;
  private skills:any;
  private candidateInfo:any;
  private candidateSkills:any;
  constructor(public dialog: MatDialog,
    private dService: DashboardService,
    private route:ActivatedRoute
  ) { 
    this.route.params.subscribe( params => {
      this.getPositinDetails(params.id)
      //this.positionId = params.id
    });
  }

  ngOnInit() {
    this.singlePosDetails=[], this.candidates=[], this.skills=[];
  }
  getPositinDetails(id:any){
    this.dService.getPositionDetails(id).subscribe(data =>{
        this.singlePosDetails = data.response[0][0];
        this.skills = data.response[1][0];
        this.candidates = data.response[2];
        this.candidateInfo = data.response[2];
        this.candidateSkills = data.response[3];
    }, error =>{
      console.log(error)
    });
  }
  addCandidate(){
    let addResume = this.dialog.open(AddResumeDialogPage, {
      width: '60%',
      height: '90%',
    });
 
    //addResume.componentInstance.recruitmentId = '1';
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

  viewProfile(cid,crid){
    console.log(this.candidateSkills)
    let viewProfile = this.dialog.open(ViewCandiateProfilePage, {
      width: '60%',
      height: '90%',
      data:{
        candidateInfo:this.candidateInfo.filter(data => data.candidate_id == cid),
        candidateSkills:this.candidateSkills.filter(data => data.candidate_recruitment_id == crid)
      }
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
