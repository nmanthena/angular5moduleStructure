import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ApiService } from '../api.service';
@Injectable()
export class DashboardService extends ApiService{

  constructor(
    http:Http
  ) {
    super(http);
   }
   getAllPositions(){
     return this.get("api/dashboard/getAllPositions");
   }
   getPositionsByType(
     num:string,
   ){
    return this.post("api/dashboard/getPositionsByType", {type:num});
   }
   getPositionDetails(
    num:string,
  ){
   return this.post("api/dashboard/getSinglePosition", {type:num});
  }
}
