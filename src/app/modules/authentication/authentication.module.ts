import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from '../../pages/login/login.page';
import { AuthenticationRouting } from "../../routes/authentication/authentication.route";
import { RegisterPage } from '../../pages/register/register.page';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AuthenticationRouting
  ],
  declarations: [
    LoginPage,
    RegisterPage
    ]
})
export class AuthenticationModule { }
