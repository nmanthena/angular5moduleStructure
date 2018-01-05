import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { OfferService } from "../../services/offer/offer.service";
import { OfferDetails } from "../../interfaces/offer-details";
@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.page.html',
  styleUrls: ['./offer-details.page.css']
})
export class OfferDetailsPage implements OnInit {
  companies: any = [];
  info: OfferDetails;
  offerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private offerService:OfferService

  ) {
    this.offerForm = formBuilder.group({
      'email': new FormControl('', [Validators.required,Validators.minLength(3)])
    });

  }

  offerDetailsSubmit(){
console.log(this.offerForm);
  }
toJson(a){
  console.log(a)
}
  ngOnInit() {
     this.offerService.getOfferDetails(1).subscribe(data => {
       this.info = data.response;
      }, error => {
        console.log(error);
      })
  }



}
