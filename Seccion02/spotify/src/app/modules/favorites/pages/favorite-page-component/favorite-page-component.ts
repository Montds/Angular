import {Component, inject} from '@angular/core';
import {PlayListBodyComponent} from '@shared/components/play-list-body-component/play-list-body-component';
import {PlayListHeaderComponent} from '@shared/components/play-list-header-component/play-list-header-component';
import {TrackService} from '@modules/tracks/services/track-service';
import {toSignal} from '@angular/core/rxjs-interop';

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
  private trackService = inject(TrackService);
  tracks = toSignal(this.trackService.getAllTracks$(), { initialValue: [] });
}
