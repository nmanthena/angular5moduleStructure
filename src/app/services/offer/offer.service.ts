import { Injectable } from '@angular/core';
import { ApiService } from "../api.service";
import { Http } from "@angular/http";

@Injectable()
export class OfferService extends ApiService{

  constructor(http: Http) {
    super(http);
  }
getOfferDetails(param){
  return this.get("api/offer/get-offer-details?candidateRecruitmentId="+param);
}

}
