import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { NewJob, DropDownModel, UserEmails } from './newjobmodel';
import { JobcreationService } from './../../services/jobcreation/jobcreation.service';
import { StoreService } from '../../services/store/store.service';
@Component({
  selector: 'app-new-job-dialog',
  templateUrl: './new-job-dialog.page.html',
  styleUrls: ['./new-job-dialog.page.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewJobDialogPage implements OnInit {
  private newjobForm: FormGroup;
  private typeOfEmploymentDropDown: DropDownModel[];
  private typeOfHireDropDown: DropDownModel[];
  private designationDropDown: DropDownModel[];
  private locationDropDown: DropDownModel[];
  private companyDropDown: DropDownModel[];
  private reportManagerDropDown: UserEmails[];
  private approvalEmailDropDown: UserEmails[];
  private user: any;
  private newJobErrors = {
    designationOfferd: '',
    titleOfPosition: '',
    numberOfPositiions: '',
    jobDescription: '',
    experience: '',
    educationQualification: '',
    mandatorySkills: '',
    desiredSkills: '',
    numberOfTechRounds: '',
    company: '',
    jobLocation: '',
    workLocation: '',
    projectName: '',
    typeOfEmployment: '',
    typeOfHire: '',
    reportManager: '',
    salaryFrom: '',
    salaryTo: '',
    finalApprovalName: '',
    resourceRequiredDate: '',
    approvalEmail: '',
    comment: '',
  };
    private validationMessages = {
    titleOfPosition: {
        required: 'Title of the position is required'
    },
    numberOfPositiions: {
        required: 'No of Positions is required'
    },
    jobDescription: {
      required: 'Experience is required'
    },
    experience: {
        required: 'Experience is required'
    },
    educationQualification: {
      required: 'Education Qualification is required'
   },
    mandatorySkills: {
        required: 'Mandatory Skills is required'
    },
    desiredSkills: {
        required: 'Desired Skill is required'
    },
    numberOfTechRounds: {
        required: 'Number Of Technical Rounds is required'
    },
    company: {
        required: 'Company is required'
    },
    jobLocation: {
        required: 'Job Location  is required',
    },
    designationOfferd: {
      required: 'Designation Offered is required'
    },
    workLocation: {
      required: 'Candidate Work Location is required'
    },
    typeOfEmployment: {
      required: 'Type of Employment is required'
    },
    typeOfHire: {
      required: 'Type of hire required'
    },
    projectName: {
      required: 'Project Name is required'
    },
    reportManager: {
      required: 'Reporting Manager is required'
    },
    salaryFrom: {
      required: 'Salary from Budget Range(LPA) is required'
    },
    salaryTo: {
      required: 'Salary to Budget Range(LPA) is required'
    },
    finalApprovalName: {
      required: 'Final Approval authority (Delivery head) is required'
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
  constructor( private formBuilder: FormBuilder,
               private dialogRef: MatDialogRef<NewJobDialogPage>,
               private jobcreationService: JobcreationService,
               private storeService: StoreService) {}
  ngOnInit() {
    this.user = this.storeService.getUser();
    this.jobcreationService.getJobBasicInfo().subscribe(data => {
      if (data.status === 1 ) {
        this.designationDropDown = data.response[0];
        this.locationDropDown = data.response[1];
        this.companyDropDown = data.response[2];
        this.reportManagerDropDown = data.response[3].filter(emials => emials.roleId === 2);
        this.approvalEmailDropDown = data.response[3].filter(emials => emials.roleId === 3);
      }
    });
    this.initData();
    this.buildForm();
  }
  private initData() {
    this.typeOfEmploymentDropDown = [
      {key: 1, value: 'Permanent' },
      {key: 2, value: 'Contarct' },
      {key: 3, value: 'Contarct to Hire' },
      {key: 4, value: 'Trainee' }
    ];
    this.typeOfHireDropDown = [
      {key: 1, value: 'New' },
      {key: 2, value: 'Replacement' }
    ];
  }
  private buildForm() {

    this.newjobForm = this.formBuilder.group({
      designationOfferd:  ['', Validators.required],
      titleOfPosition: ['', Validators.required],
      numberOfPositiions:  ['', Validators.required],
      jobDescription:  ['', Validators.required],
      experience:  ['', Validators.required],
      educationQualification:  ['', Validators.required],
      mandatorySkills:  ['', Validators.required],
      desiredSkills:  ['', Validators.required],
      numberOfTechRounds:  ['', Validators.required],
      company:  ['', Validators.required],
      jobLocation: ['', Validators.required],
      workLocation:  ['', Validators.required],
      typeOfEmployment:  ['', Validators.required],
      typeOfHire:  ['', Validators.required],
      projectName:  ['', Validators.required],
      reportManager:  ['', Validators.required],
      salaryFrom:  ['', Validators.required],
      salaryTo:  ['', Validators.required],
      finalApprovalName:  ['', Validators.required],
      resourceRequiredDate:  [new Date(), Validators.required],
      approvalEmail:  ['', Validators.required],
      comment:  ['', Validators.required]
    });
    this.newjobForm.valueChanges.subscribe(data => {
      this.valiDateNewJobForm();
    });
  }

  valiDateNewJobForm() {
    for (let field in this.newJobErrors) {
      this.newJobErrors [field] = '';
      let input = this.newjobForm.get(field);
      if (input.dirty && input.invalid) {
          for (let error in input.errors) {
              this.newJobErrors[field] = this.validationMessages[field][error];
          }
     }
  }
  }
  onNewJobSubmit(newjobFormValue) {
    if (this.user.user_id !== undefined) {
      newjobFormValue.userId = this.user.user_id;

    }
    this.jobcreationService.addNewJob(newjobFormValue).subscribe(data => {
      this.closeDailog();
    });
  }
  closeDailog(): void {
    this.dialogRef.close();
  }
}