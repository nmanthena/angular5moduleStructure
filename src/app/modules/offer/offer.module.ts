import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferRouting } from "../../routes/offer/offer.route";
import { OfferDetailsPage } from "../../pages/offer-details/offer-details.page";
import { SharedModule } from "../shared/shared.module";
import { OfferService } from "../../services/offer/offer.service";
import { OfferApprovalDialogPage } from '../../pages/offer-approval-dialog/offer-approval-dialog.page';
import { OfferDetailsViewDialogPage } from '../../pages/offer-details-view-dialog/offer-details-view-dialog.page';

@NgModule({
  imports: [
    CommonModule,
    OfferRouting,
    SharedModule
  ],
  declarations: [
    OfferDetailsPage,
    OfferApprovalDialogPage,
    OfferDetailsViewDialogPage
  ],
  providers: [OfferService]
})
export class OfferModule { }
