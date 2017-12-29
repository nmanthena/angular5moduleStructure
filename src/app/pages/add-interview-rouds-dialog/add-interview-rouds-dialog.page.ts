import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-interview-rouds-dialog',
  templateUrl: './add-interview-rouds-dialog.page.html',
  styleUrls: ['./add-interview-rouds-dialog.page.css']
})
export class AddInterviewRoudsDialogPage implements OnInit {
  public noOfRounds = []; 
  rounds : any = {};
  addRoundsForm :FormGroup;
  isSelectedForNextRound : boolean = false;

  constructor(private formBuilder : FormBuilder) { 
    this.addRoundsForm = formBuilder.group({
        'status' : new FormControl('',Validators.compose([Validators.required])),
        'comment' : new FormControl('',Validators.compose([Validators.required,Validators.minLength(2)])),
    });
  }

  ngOnInit() {
      this.noOfRounds=[
        { 'interviewType' : 'Technical Round 1','interviewer':'Naresh M.','convienientSolts':'' },
        { 'interviewType' : 'Technical Round 2','interviewer':'Nagaraju G.','convienientSolts':'' },
        
      ];
  }

  submitRounds(){

  }
  selectedStatus(){
      if(this.rounds.status === '3' || this.rounds.status === '4'){
          this.isSelectedForNextRound = true;
      }else{
          this.isSelectedForNextRound = false;
      }
  }

}
