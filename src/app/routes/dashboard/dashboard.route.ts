import { Routes, RouterModule } from "@angular/router";
import { MainPage } from "../../pages/main/main.page";
import { DashboardViewPage } from "../../pages/dashboard-view/dashboard-view.page";
import { NewJobDialogPage } from "../../pages/new-job-dialog/new-job-dialog.page";
import { ScheduleInterviewDialogPage } from '../../pages/schedule-interview-dialog/schedule-interview-dialog.page';
import { ViewCandiateProfilePage } from "../../pages/view-candiate-profile/view-candiate-profile.page";
import { AddResumeDialogPage } from "../../pages/add-resume-dialog/add-resume-dialog.page";
import { ViewPositionPage } from "../../pages/view-position/view-position.page";
import { PositionsListingPage } from "../../pages/positions-listing/positions-listing.page";
import { ApprovalDialogPage } from "../../pages/approval-dialog/approval-dialog.page";
import { AddInterviewRoudsDialogPage } from '../../pages/add-interview-rouds-dialog/add-interview-rouds-dialog.page';
import { OfferDetailsPage } from "../../pages/offer-details/offer-details.page";
import { IntroGraphPage } from "../../pages/intro-graph/intro-graph.page";
import { OnlyLoggedUsersGuard } from "../../guards/only-logged-users.guard";

const routes: Routes = [
    {
        path: 'main', component: MainPage,
        children: [
            { path: '', redirectTo: '/main/dashboard', pathMatch: 'full', canActivate: [OnlyLoggedUsersGuard] },
            { path: 'intro', component: IntroGraphPage },
            {
                path: 'dashboard', component: DashboardViewPage, canActivate: [OnlyLoggedUsersGuard],
                children: [
                    { path: 'new-job', component: NewJobDialogPage },
                    { path: 'schedule', component: ScheduleInterviewDialogPage },
                    { path: 'approval', component: ApprovalDialogPage },
                    { path: 'offer', component: OfferDetailsPage },
                ]
            }, 
            {path:'positions-listing',component:PositionsListingPage, canActivate: [OnlyLoggedUsersGuard]},
            {path: 'view-position', component:ViewPositionPage, canActivate: [OnlyLoggedUsersGuard], 
            children:[
                {path:'add-resume',component:AddResumeDialogPage},    
                {path:'view-profile',component:ViewCandiateProfilePage},    
                {path: 'add-interview-rounds',component:AddInterviewRoudsDialogPage}
            ]
            },
        ],
        
    }
]

export const DashboardRouting = RouterModule.forChild(routes);
