import { Component, OnInit } from '@angular/core';
import { AddResumeDialogPage } from '../add-resume-dialog/add-resume-dialog.page';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-view-candiate-profile',
  templateUrl: './view-candiate-profile.page.html',
  styleUrls: ['./view-candiate-profile.page.css']
})
export class ViewCandiateProfilePage implements OnInit {
  public skillsSets = []; public p_assessments=[];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
      this.skillsSets = ["Javascript", "HTML", "CSS", "Angular", "Node","Material Designs"];
      this.p_assessments = [
        {name:"General Communiction Skills", value:["N/A",1,2,3,4,5]},
        {name:"English Speeking Skills", value:["N/A",1,2,3,4,5]},
        {name:"Team Spirit Team Handling Skills", value:["N/A",1,2,3,4,5]},
        {name:"Personality, Confidence Skills", value:["N/A",1,2,3,4,5]},
        {name:"Attitude Reliability", value:["N/A",1,2,3,4,5]},
        {name:"Leadership", value:["N/A",1,2,3,4,5]},
        {name:"Stability", value:["N/A",1,2,3,4,5]},
        {name:"Over All", value:["N/A",1,2,3,4,5]},
        {name:"Status", value:["N/A",1,2,3,4,5]},
      ];
  }
  editProfile(){
    let editProfile = this.dialog.open(AddResumeDialogPage, {
      width: '60%',
      height: '90%',
    })
    editProfile.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
