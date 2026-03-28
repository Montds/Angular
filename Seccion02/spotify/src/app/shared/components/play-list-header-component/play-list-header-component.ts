import {Component, Input} from '@angular/core';
import {TrackModel} from '@core/models/tracks.model';

@Component({
  selector: 'app-play-list-header-component',
  imports: [],
  templateUrl: './play-list-header-component.html',
  styleUrl: './play-list-header-component.css',
})
export class PlayListHeaderComponent {
  @Input() tracks: TrackModel[] = []
}
