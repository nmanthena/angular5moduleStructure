import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FeedbackService } from '../../services/feedback/feedback.service';

@Component({
  selector: 'app-interviewer-feedback-dialog',
  templateUrl: './interviewer-feedback-dialog.page.html',
  styleUrls: ['./interviewer-feedback-dialog.page.css']
})
export class InterviewerFeedbackDialogPage implements OnInit {
  private candidateInfo:any;
  private profileInfo:any;
  private experienceInfo:any;
  constructor(private feedbackService : FeedbackService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.feedbackService.getInterviewerFeedback(2).subscribe(data => {
      if (data.status === 1 ) {
            this.candidateInfo = data.response[0][0];
            this.profileInfo = data.response[1][0];
            this.experienceInfo = data.response[2][0];
        }
    })
  }
}
