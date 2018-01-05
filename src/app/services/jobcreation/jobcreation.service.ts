import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { ApiService } from '../api.service';
import { NewJob } from './../../pages/new-job-dialog/newjobmodel';
import { error } from 'util';
@Injectable()
export class JobcreationService extends ApiService {
    constructor(http: Http) {
        super(http);
      }
    public getJobBasicInfo(): Observable<any> {
       /* return this.httpClient.post('/api/jobcreation/jobinfo/', {})
            .map(res => res)
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));*/
            return this.post('api/jobcreation/jobinfo/', {});
    }

    public addNewJob(newJob: NewJob): Observable<any> {
        /*return this.httpClient.post('/api/jobcreation/createNewJob/', newJob)
        .map(res => res)
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));*/
        return this.post('api/jobcreation/createNewJob/', newJob);
    }
    public  getJobInfo(data: any): Observable<any> {
        return this.post('api/jobcreation/getJobInfo/', data);
    }
    public  updateJobInfo(data: any): Observable<any> {
        return this.post('api/jobcreation/updateJobInfo/', data);
    }
}
