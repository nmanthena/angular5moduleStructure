import { Routes, RouterModule } from "@angular/router";
import { LoginPage } from "../../pages/login/login.page";
import { RegisterPage } from "../../pages/register/register.page";
const routes:Routes = [
  {path: 'login', component: LoginPage},
  {path: 'register', component: RegisterPage}
]

export const AuthenticationRouting =  RouterModule.forChild(routes)
