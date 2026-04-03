
import { Routes } from '@angular/router';

import {HistoryPageComponent} from '@modules/history/pages/history-page-component/history-page-component';

export const historyRoutes: Routes = [
  {
    path: '',
    component:HistoryPageComponent,
    outlet: 'child'
  }
];

