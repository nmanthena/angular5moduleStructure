import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {DateTimePickerModule} from 'ng-pick-datetime';
@Component({
  selector: 'app-schedule-interview-dialog',
  templateUrl: './schedule-interview-dialog.page.html',
  styleUrls: ['./schedule-interview-dialog.page.css']
})
export class ScheduleInterviewDialogPage implements OnInit {
  durationTimeArray  =[];
  duration : string;  
  scheduleForm : FormGroup;
  schedule : any = {};

  constructor(
      public dialog :  MatDialog,
      private formBuilder : FormBuilder
    ) { 
    
    this.scheduleForm = formBuilder.group({
      'email': new FormControl('', Validators.required),
      'id' : new FormControl('', Validators.required),
      'dateOfSchedule' :  new FormControl('',Validators.required),
      'rounds':  new FormControl('',Validators.required),
      'comment' : new FormControl('',Validators.required),
      'interviewType' : new FormControl('',Validators.required),
      'durationTime' : new FormControl('',Validators.required),

    });
      this.maxDate.setMonth(this.maxDate.getMonth() + 1);
  }

    minDate = new Date();
    maxDate = new Date();
    
  ngOnInit() {
     for(var i=1 ;i<=12; i++){
      this.durationTimeArray.push(i * 5);
    }
    this.duration = this.durationTimeArray[8];
  }

  scheduleInterview(){
     if (this.scheduleForm.invalid) {
       console.log("called.");
      Object.keys(this.scheduleForm.controls).forEach(key => {
        this.scheduleForm.get(key).markAsDirty();
      });
      return;
    }
  }
}
