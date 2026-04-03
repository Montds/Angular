
import { Routes } from '@angular/router';
import {FavoritePageComponent} from '@modules/favorites/pages/favorite-page-component/favorite-page-component';

export const favoriteRoutes: Routes = [
  {
    path: '',
    component:FavoritePageComponent,
    outlet: 'child'
  }
];
