import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { LoginPage } from '../../pages/login/login.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation:ViewEncapsulation.None,
  providers:[AuthenticationService],
})
export class HeaderComponent implements OnInit {

  constructor(private auth:AuthenticationService,
  private router:Router
  ) { }

  ngOnInit() {
  }
  logout(){
    this.auth.logout().subscribe(data => {
      if(data){
        localStorage.removeItem('isUser');
        this.router.navigate(['login']);
      };
    }, error => {
      console.log(error);
    })
    console.log("logout")
  }
}
