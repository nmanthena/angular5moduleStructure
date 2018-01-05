import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ScheduleInterviewService } from '../../services/schedule-interview/schedule.interview.service';
import { DropDownModel } from './addresumemodel';

@Component({
  selector: 'app-add-resume-dialog',
  templateUrl: './add-resume-dialog.page.html',
  styleUrls: ['./add-resume-dialog.page.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddResumeDialogPage implements OnInit {
  public skillsSets = [];
  public defaultRating = [1, 2, 3, 4, 5];
  selectedFileName: '';
  sourceOfResume: any = [];
  
  personalSkillAssesments = [];
  candidateObj: FormGroup;
  candidate: any = {};
  
  jdSkillSet =  [];
   
  constructor(private formBuilder: FormBuilder, private scheduleInterviewService: ScheduleInterviewService) {

  }
 
  
  ngOnInit() {
    
    this.getAssessmentInformation();
     
  }
  createForm(){
    this.candidateObj = new FormGroup({
      fname: new FormControl('', Validators.required),
      lname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      exp: new FormControl('', Validators.required),
      rExp: new FormControl('', Validators.required),
      fixedSalary: new FormControl('', Validators.required),
      vPay: new FormControl('', Validators.required),
      bonusPay: new FormControl('', Validators.required),
      optAny: new FormControl('', Validators.required),
      anyOther: new FormControl('', Validators.required),
      total: new FormControl('', Validators.required),
      expCtc: new FormControl('', Validators.required),
      nPeriod: new FormControl('', Validators.required),
      exCtcNegotiable: new FormControl('', Validators.required),
      nPeriodNegotiable: new FormControl('', Validators.required),
      reasonFroChange: new FormControl('', Validators.required),
      extraComments: new FormControl('', Validators.required),
      leaveFeedback: new FormControl('', Validators.required),
      resume: new FormControl('', Validators.required),
      overallRating : new FormControl('', Validators.required),
      source : new FormControl('', Validators.required),
    });
    //  Dynamic form build
    let i = 0, j = 0,k=0,l=0;
    let assessmentFormGroup: FormGroup = new FormGroup({});
    for (let assessment of this.personalSkillAssesments) {
      let control: FormControl = new FormControl(assessment.assessment_id);
      this.candidateObj.addControl('assessment-' + i, new FormControl('', Validators.required));
      i++;
    }
    for (let jdSkill of this.jdSkillSet) {
      let control: FormControl = new FormControl(jdSkill.skill_id);
      this.candidateObj.addControl('jdTotalskillassessment-' + j, new FormControl('', Validators.required));
      j++;
    }
    for (let lasWorked of this.jdSkillSet) {
      let control: FormControl = new FormControl(lasWorked.skill_id);
      this.candidateObj.addControl('jdlastworkedskillassessment-' + k, new FormControl('', Validators.required));
      k++;
    }
    
    this.candidate.jdTotalWorkedExp  = [];
    this.candidate.jdLastWorkedExp  = [];
    this.candidate.ratingOfAssessment = [];
  }
  overAllRating : any = [];
  calculateOverAllRating(index,values){
    if(values){
      this.overAllRating.splice( index, 0, values );
    }
    if(this.overAllRating.length == this.personalSkillAssesments.length){
      this.candidate.overallRating = eval(this.overAllRating.join("+")) / this.overAllRating.length ;
    }
  }
  getAssessmentInformation() {
    let data : any= {};
    data.recruitmentId = 4;
    this.scheduleInterviewService.getRecruitmentInfo(data).subscribe(data => {
      let response = data.response;
      this.personalSkillAssesments = data.response.personalAssesment;
      this.sourceOfResume = data.response.sourceOfResume;
      this.jdSkillSet = data.response.jdSkillSet;
      
      this.createForm();

    }, error => {
      console.log(error);
    })
  }
  addCandidate() {

    if (this.candidateObj.valid) {
    
    let expWithId = '';
    for(let i=0;i< this.jdSkillSet.length;i++){
      expWithId += this.jdSkillSet[i].skill_id+','+this.candidate.jdTotalWorkedExp[i]+','+this.candidate.jdLastWorkedExp[i]+'|';
    }

    let personalSkillWithId='';
    for(let j=0;j< this.personalSkillAssesments.length;j++){
      personalSkillWithId += this.personalSkillAssesments[j].assessment_id+','+this.candidate.ratingOfAssessment[j]+'|';
    }
    this.candidate.professionalExperience = expWithId.substring(0, expWithId.length-1);
    this.candidate.personalAssesmentRatings =   personalSkillWithId.substring(0, personalSkillWithId.length-1);
    this.candidate.recruitmentId = 2;
    this.candidate.designationId = 17;
    this.candidate.createdBy = 25;

    

    this.scheduleInterviewService.addCandidateProflie(this.candidate).subscribe(data => {
      console.log(data);

    }, error => {
      console.log(error);
    });
  }

  }
  onFileChange(e) {
    this.selectedFileName = e.target.files[0].name;
    //this.candidateObj.controls['resume'].setValue('abc');
  }

}
