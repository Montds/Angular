import { Component } from '@angular/core';
import {PlayListBodyComponent} from '@shared/components/play-list-body-component/play-list-body-component';
import {PlayListHeaderComponent} from '@shared/components/play-list-header-component/play-list-header-component';

@Component({
  selector: 'app-favorite-page-component',
  imports: [
    PlayListBodyComponent,
    PlayListHeaderComponent
  ],
  templateUrl: './favorite-page-component.html',
  styleUrl: './favorite-page-component.css',
})
export class FavoritePageComponent {


}
