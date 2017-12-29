import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-job-dialog',
  templateUrl: './new-job-dialog.page.html',
  styleUrls: ['./new-job-dialog.page.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewJobDialogPage implements OnInit {
  newjob: FormGroup;
  jd: any = {};
  
  constructor(private formBuilder: FormBuilder ){
    this.newjob = formBuilder.group({
        'email': new FormControl('', Validators.required),
        'name': new FormControl('', Validators.required),
        'titleposition': new FormControl('', Validators.required),
        'numberofpositions': new FormControl('', Validators.required),
        'experience': new FormControl('', Validators.required),
        'mandatoryskills': new FormControl('', Validators.required),
        'qualification': new FormControl('', Validators.required)
    });
  }
 

  ngOnInit(){
    
  }
}