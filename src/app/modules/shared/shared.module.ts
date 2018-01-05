import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "../material/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms/";
import { HttpModule } from "@angular/http";
import { ComponentsModule } from "../components/components.module";
import { RoutingModule } from "../../routes/routing.module";
import { FlexLayoutModule } from '@angular/flex-layout';
import { DateTimePickerModule } from 'ng-pick-datetime';
import { ChartsModule } from 'ng2-charts';
import { MessageComponent } from '../../components/message/message.component';
import { NgxMessagesModule } from 'ngx-messages';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RoutingModule,
    FlexLayoutModule,
    DateTimePickerModule,
    ChartsModule,
    NgxMessagesModule.configure({ showErrorsOnlyIfInputDirty: false })
  ],
  declarations: [MessageComponent],
  exports:[
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RoutingModule,
    FlexLayoutModule,
    DateTimePickerModule,
    ChartsModule,
    MessageComponent,
    NgxMessagesModule
  ]
})
export class SharedModule { }
