import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from '@modules/home/pages/home-page-component/home-page-component';
import {TracksPageComponent} from '@modules/tracks/pages/tracks-page-component/tracks-page-component';

//sub rutas

const routes: Routes = [
  {
    path: '',
    component: TracksPageComponent,
    outlet: 'child'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TracksRoutingModule { }
