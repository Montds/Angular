import {Component, inject, Input} from '@angular/core';
import {TrackModel} from '@core/models/tracks.model';
import {ImgBroken} from '@shared/directives/img-broken';
import {MultimediaService} from '@shared/services/multimedia-service';

@Component({
  selector: 'app-card-player-component',
  imports: [
    ImgBroken
  ],
  templateUrl: './card-player-component.html',
  styleUrl: './card-player-component.css',
})

export class CardPlayerComponent {
  multimediaService = inject(MultimediaService);

  @Input() mode: 'small' | 'big' = 'small'
  @Input() track: TrackModel = { _id: 0, name: '', album: '', url: '', cover: '' };

  //analizar despues por que se conecta con el media player
  public sendPlay(track: TrackModel)
  {
    this.multimediaService.trackInfo$.next(track);
  }

}
