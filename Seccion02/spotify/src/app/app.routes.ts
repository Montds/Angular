import { Routes } from '@angular/router';
import {SideBarComponent} from '@shared/components/side-bar-component/side-bar-component';


//los : se usan para colocar parametros en la ruta path:":username"
export const routes: Routes = [
  {
    path:"", //ruta localhost:4200/
    component: SideBarComponent
   // loadChildren: () => import("./modules/home/home-module").then(m => m.HomeModule),
  }
];
