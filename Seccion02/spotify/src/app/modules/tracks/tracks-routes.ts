
import {  Routes } from '@angular/router';
import {TracksPageComponent} from '@modules/tracks/pages/tracks-page-component/tracks-page-component';

//sub rutas

export const tracksRoutes: Routes = [
  {
    path: '',
    component: TracksPageComponent,
    outlet: 'child'
  }

];

