import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs";
import { AppSettings } from "../app.settings";

@Injectable()
export class ApiService {

  headerObject: { 'Content-Type': string; 'Access-Control-Allow-Origin': string; };
  
  private API_ENDPOINT = AppSettings.API_ENDPOINT;
  
    private headers: Headers;
  constructor(public http: Http) {

    this.headerObject = { 'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*' };

   }

  public get(apiPath) {
    return this.http.get(this.API_ENDPOINT + apiPath, {headers: this.headers})
      .map(this.extractData)
      .catch(error => {
        return this.handleError(error || 'Error while executing GET for route ' + apiPath);
      });
  }

  public post(apiPath, data) {
    return this.http.post(this.API_ENDPOINT + apiPath, data, {headers: this.headers})
      .map(this.extractData)
      .catch(error => {
        return this.handleError(error || 'Error while executing POST for route ' + apiPath);
      });
  }

   private handleError(error: any) {
    let data;
    try {
      data = error.json() || error;
    } catch (e) {
      data = {error: null};
    }
    return Observable.throw({status: error.status, data});
  }

  private extractData(res: any) {
    try {
      let body: any = res.json();
      return body || {};
    } catch (e) {
      return res._body;
    }
  }

}
