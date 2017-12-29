import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardRouting } from '../../routes/dashboard/dashboard.route';
import { IntroGraphPage } from '../../pages/intro-graph/intro-graph.page';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DashboardRouting,
  ],
  declarations: [IntroGraphPage,]
})
export class IntroModule { }
