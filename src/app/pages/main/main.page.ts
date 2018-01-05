import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StoreService } from "../../services/store/store.service";
import { AuthenticationService } from "../../services/authentication/authentication.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainPage implements OnInit {
  user: any = [];

  constructor(
    public store: StoreService,
    public authUser: AuthenticationService
  ) { }

  ngOnInit() {
    this.user = this.store.getUser();
    if (!this.user) {
      this.authUser.getToken().subscribe(data => {
        this.user = [data];
        console.log(this.user);
      })
   
    }

  }

}
