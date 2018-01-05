import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { ApiService } from '../api.service';
import { error } from 'util';

@Injectable()
export class FeedbackService extends ApiService {

  constructor(http:Http) {
    super(http);
  }
  getInterviewerFeedback(){
    return this.get('api/feedback/interviewerFeedback',);
  }
}