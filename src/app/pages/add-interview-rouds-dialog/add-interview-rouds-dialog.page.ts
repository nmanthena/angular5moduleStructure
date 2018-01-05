import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DropDownModel, Interviewer } from './addroundsmodel';
import { ScheduleInterviewService } from '../../services/schedule-interview/schedule.interview.service';
 

@Component({
  selector: 'app-add-interview-rouds-dialog',
  templateUrl: './add-interview-rouds-dialog.page.html',
  styleUrls: ['./add-interview-rouds-dialog.page.css']
})
export class AddInterviewRoudsDialogPage implements OnInit {

  rounds : any = {};
  addRoundsForm :FormGroup;
  isSelectedForNextRound : boolean = false;
  private statusOfCandidate: DropDownModel[];
  private interviewType : DropDownModel[];
  private typeOfEmploymentDropDown: DropDownModel[];
  private interviewers : DropDownModel[];
  candidateApprovalForm : FormGroup;
  

  constructor(private formBuilder : FormBuilder,private scheduleInterviewService : ScheduleInterviewService) { 
   
  }

  ngOnInit() {
      
      this.initData();
  }
  private initData() {
    this.statusOfCandidate = [
      {key: 1, value: 'Shortlist' },
      {key: 2, value: 'Reject' }
    ];
    this.interviewType = [
      {key: 1, value: 'F2F Round' },
      {key: 2, value: 'Skype/Telephonic' }
    ];
    this.buildForm();
  }
  private buildForm() {

    this.candidateApprovalForm = this.formBuilder.group({
      comment: new FormControl('', Validators.required),
      status : new FormControl('', Validators.required),
      dateOfSchedule :new FormControl('', Validators.required), 
      interviewer : new FormControl('', Validators.required), 
      interivewType: new FormControl('', Validators.required), 
    });
    this.candidateApprovalForm.valueChanges.subscribe(data => {
      this.valiDateNewJobForm();
    });
    this.rounds.interviewType=[];
    this.rounds.interviewer = [];
    this.rounds.convenientSlots=[];
  }

  valiDateNewJobForm() {
    for (let field in this.newJobErrors) {
      this.newJobErrors [field] = '';
      let input = this.candidateApprovalForm.get(field);
      if (input.dirty && input.invalid) {
          for (let error in input.errors) {
              this.newJobErrors[field] = this.validationMessages[field][error];
          }
     }
  }
  }
  submitRounds(){
    if(this.candidateApprovalForm.valid){
      console.log(this.rounds);
      console.log(this.rounds.convenientSlots[0])
      
    }
    
  }
  getNumberOfRounds(count){
    return new Array(count);
  }
  selectedStatus(){
      console.log(this.rounds.status);
      
      if(this.rounds.status === 1 ){
        //get interveiwrs data.
        this.scheduleInterviewService.getInterviewers().subscribe(data => {
            this.interviewers = data.response.filter(data => data.user_id != null);
        }, error => {
          console.log(error);
        })
        
        this.isSelectedForNextRound = true;
          
      }else{
          this.isSelectedForNextRound = false;
      }
  }
  private newJobErrors = {
    status: '',
    comment: '',
  };
    private validationMessages = {
    status: {
        required: 'Status required'
    },
    resourceRequiredDate: {
      required: 'Resource Required by Date is required'
    },
    approvalName: {
      required: 'Name is required',
    },
    approvalEmail: {
      required: 'Email is required',
    },
    comment: {
      required: 'Leave a comment is required',
    }
};

}
