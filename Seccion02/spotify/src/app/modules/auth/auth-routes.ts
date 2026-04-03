
import {  Routes } from '@angular/router';
import {LoginPageComponent} from '@modules/auth/pages/login-page-component/login-page-component';

export const authRoutes: Routes =
  [
  {
    path: 'login',
    component:LoginPageComponent
  }
];
