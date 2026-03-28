import {Component, OnDestroy, OnInit, signal, ViewChild} from '@angular/core';
import {TrackModel} from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player-component',
  imports: [],
  templateUrl: './media-player-component.html',
  styleUrl: './media-player-component.css',
})

export class MediaPlayerComponent {
  mockCover:TrackModel = {
    cover: 'https://i.scdn.co/image/ab67616d0000b27345ca41b0d2352242c',
    album: 'Gioli & Assia',
    name: 'BEBE (Oficial)',
    url: 'http://localhost/track.mp3',
    _id: 1
  }
}
