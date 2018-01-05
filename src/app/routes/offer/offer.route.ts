import { Routes, RouterModule } from "@angular/router";
import { OfferDetailsPage } from "../../pages/offer-details/offer-details.page";
import { DashboardViewPage } from "../../pages/dashboard-view/dashboard-view.page";
import { OnlyLoggedUsersGuard } from "../../guards/only-logged-users.guard";
import { OfferApprovalDialogPage } from "../../pages/offer-approval-dialog/offer-approval-dialog.page";
import { OfferDetailsViewDialogPage } from "../../pages/offer-details-view-dialog/offer-details-view-dialog.page";
const routes: Routes = [
     {path: 'dashboard', component: DashboardViewPage, canActivate: [OnlyLoggedUsersGuard],
                children: [
                    { path: 'offer', component: OfferDetailsPage },
                    { path: 'offer-approval', component: OfferApprovalDialogPage },
                    { path: 'offer-details', component: OfferDetailsViewDialogPage },
                ]
     }
]

export const OfferRouting =  RouterModule.forChild(routes)
