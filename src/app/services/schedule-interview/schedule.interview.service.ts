import { Injectable } from '@angular/core';
import { ApiService } from "../api.service";
import { Http } from "@angular/http";

@Injectable()
export class ScheduleInterviewService extends ApiService {

  constructor(http:Http) {
    super(http);
  }
  addCandidateProflie(body){
    return this.post('api/candidate/addCandidateProfile',body);
  }
  getRecruitmentInfo(body){
    return this.post('api/candidate/getRecruitmentAssessmentSkills',body);
  }
  getInterviewers(){
    return this.get('api/schedule/getInterviewers');
  }

}
