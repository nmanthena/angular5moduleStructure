import { Component, ViewEncapsulation } from '@angular/core';
import { LoaderService } from "./services/loader/loader.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
   color = 'primary';
  mode = 'indeterminate';
  value = 50;
  bufferValue = 75;
  showLoader:boolean;
  constructor(private loaderService: LoaderService){
      this.loaderService.status.subscribe((val: boolean) => {
            this.showLoader = val;
        });
  }
}
