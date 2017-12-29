import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-add-resume-dialog',
  templateUrl: './add-resume-dialog.page.html',
  styleUrls: ['./add-resume-dialog.page.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddResumeDialogPage implements OnInit {
  public skillsSets = [];
  public p_assessments = [
    {name:"General Communiction Skills", value:["N/A",1,2,3,4,5], selected:1},
    {name:"English Speeking Skills", value:["N/A",1,2,3,4,5], selected:2},
    {name:"Team Spirit Team Handling Skills", value:["N/A",1,2,3,4,5], selected:3},
    {name:"Personality, Confidence Skills", value:["N/A",1,2,3,4,5], selected:4},
    {name:"Attitude Reliability", value:["N/A",1,2,3,4,5], selected:5},
    {name:"Leadership", value:["N/A",1,2,3,4,5], selected:"N/A"},
    {name:"Stability", value:["N/A",1,2,3,4,5], selected:"N/A"},
    {name:"Over All", value:["N/A",1,2,3,4,5], selected:"N/A"},
    {name:"Status", value:["N/A",1,2,3,4,5], selected:"N/A"},
  ];
  candidateObj:FormGroup;
  private selected;
  skillName:string ='';
  constructor(private formBuilder: FormBuilder) {
    
  }
  
  addSkill(){
    let isExist = this.skillsSets.includes(this.skillName);
    if(!isExist && this.skillName != ''){
      this.skillsSets.push(this.skillName);
    }
  }
  removeSkill(e){
    const index = this.skillsSets.indexOf(e);
    this.skillsSets.splice(index, 1);
  }
  addCandidate(){
    console.log(this.candidateObj.value)
  }
  ngOnInit() {
    this.candidateObj = new FormGroup({
      fname: new FormControl('',Validators.required),
      lname: new FormControl(),
      exp: new FormControl('',Validators.required),
      rExp: new FormControl('',Validators.required),
      fixedSalary: new FormControl('',Validators.required),
      vPay: new FormControl(),
      bonusPay: new FormControl(),
      optAny: new FormControl(),
      anyOther: new FormControl(),
      expCtc: new FormControl('',Validators.required),
      nPeriod: new FormControl('',Validators.required),
      exCtcNegotiable: new FormControl(),
      nPeriodNegotiable: new FormControl(),
      reasonFroChange: new FormControl(),
      extraComments: new FormControl(),
      leaveFeedback: new FormControl(),
      resume: new FormControl(),
    });
    //  Dynamic form build
    let i = 0;
    let assessmentFormGroup: FormGroup = new FormGroup({});
    for (let assessment of this.p_assessments) {
      let control: FormControl = new FormControl(assessment.selected);
      this.candidateObj.addControl('assessment-'+i, control);
      i++;
    } 
  }
}
