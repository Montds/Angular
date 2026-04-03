import { Routes } from '@angular/router';
import {SideBarComponent} from '@shared/components/side-bar-component/side-bar-component';
import {HomePageComponent} from '@modules/home/pages/home-page-component/home-page-component';
import {NotFoundComponent} from '@modules/notFound/not-found-component/not-found-component';
import {sessionGuard} from '@core/guards/session-guard';


//los : se usan para colocar parametros en la ruta path:":username"
export const routes: Routes = [
  {
   path:"auth", //ruta localhost:4200/
   loadChildren: () => import("./modules/auth/auth-module").then(m => m.AuthModule)
  },
  {
    path: "",
    component:HomePageComponent ,
    loadChildren: () => import("./modules/home/home-module").then(m => m.HomeModule),
    canActivate:[
      sessionGuard
    ]
  },
  {
    path:"**",
    component:NotFoundComponent
  }


];
