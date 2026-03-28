import {Component, Input} from '@angular/core';
import {TrackModel} from '@core/models/tracks.model';
import {ImgBroken} from '@shared/directives/img-broken';

@Component({
  selector: 'app-card-player-component',
  imports: [
    ImgBroken
  ],
  templateUrl: './card-player-component.html',
  styleUrl: './card-player-component.css',
})
export class CardPlayerComponent {
  @Input() mode: 'small' | 'big' = 'small'
  @Input() track: TrackModel = { _id: 0, name: '', album: '', url: '', cover: '' };
}
