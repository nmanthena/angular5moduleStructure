import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-approval-dialog',
  templateUrl: './offer-approval-dialog.page.html',
  styleUrls: ['./offer-approval-dialog.page.css']
})
export class OfferApprovalDialogPage implements OnInit {

public salary:Array<any> = [
  {label:'Fixed',value:420000},
  {label:'Varible',value:null},
  {label:'Bonus',value:null},
  {label:'Options',value:null},
  {label:'Any Other',value:null},
  {label:'Total',value:null},
  {label:'Expected salary',value:null}
];
  constructor() { }

  ngOnInit() {
  }


}
