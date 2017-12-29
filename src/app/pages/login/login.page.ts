import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from "../../services/authentication/authentication.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  encapsulation: ViewEncapsulation.None,
  providers:[AuthenticationService]
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  hide = true;
  user: any = {};
  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthenticationService,
    private router : Router
  ) {

    this.loginForm = formBuilder.group({
      'email': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    });

  }

  ngOnInit() {
  }
  stringify(a) {
    console.log(a);
  }
  login() {
    if (this.loginForm.valid) {
      this.auth.login(this.user).subscribe(data => {
        if(data.session){
          localStorage.setItem('isUser', data.session.sid);
          this.user.sid = data.session.sid;
          this.router.navigate(['main/intro']);
        }
      }, error => {
        console.log(error);
      })
    }
  }

}
