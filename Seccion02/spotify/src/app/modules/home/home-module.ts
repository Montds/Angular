import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing-module';

import {HomePageComponent} from './pages/home-page-component/home-page-component';
import {SharedModule} from '@shared/shared-module';
import {SideBarComponent} from '@shared/components/side-bar-component/side-bar-component';


//en declarations debo de agregar los component que creado para esta seccion
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule//esto dice que tendra asignada una ruta
    //aqui se agrega el HomePageCompent al HomeModule
  ]
})
export class HomeModule { }
