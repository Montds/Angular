import { Component } from '@angular/core';
import { SideBarComponent } from '@shared/components/side-bar-component/side-bar-component';
import {RouterOutlet} from '@angular/router';
import {MediaPlayerComponent} from '@shared/components/media-player-component/media-player-component';


@Component({
  selector: 'app-home-page-component',
  imports: [
    SideBarComponent,
    RouterOutlet,
    MediaPlayerComponent
  ],
  templateUrl: './home-page-component.html',
  styleUrl: './home-page-component.css',
})

export class HomePageComponent {
}
