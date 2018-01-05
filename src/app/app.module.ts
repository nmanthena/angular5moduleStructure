import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SharedModule } from "./modules/shared/shared.module";
import { AuthenticationModule } from "./modules/authentication/authentication.module";
import { RoutingModule } from "./routes/routing.module";
import { DashboardModule } from "./modules/dashboard/dashboard.module";
import { ScheduleModule } from './modules/schedule/schedule.module';
import { LoaderService } from "./services/loader/loader.service";
import { IntroModule } from './modules/intro/intro.module';
import { OnlyLoggedUsersGuard } from './guards/only-logged-users.guard';
import { StoreService } from "./services/store/store.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AuthenticationModule,
    DashboardModule,
    ScheduleModule,
    IntroModule
  ],
  providers: [LoaderService, OnlyLoggedUsersGuard,StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
