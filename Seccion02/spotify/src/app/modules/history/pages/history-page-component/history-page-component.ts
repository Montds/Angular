import {Component, inject} from '@angular/core';
import {SearchComponent} from '@modules/history/components/search-component/search-component';
import {PlayListBodyComponent} from '@shared/components/play-list-body-component/play-list-body-component';
import {SearchService} from '@modules/history/services/search-service';
import {TrackModel} from '@core/models/tracks.model';
import {AsyncPipe} from '@angular/common';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-history-page-component',
  imports: [
    SearchComponent,
    PlayListBodyComponent,
    AsyncPipe
  ],
  templateUrl: './history-page-component.html',
  styleUrl: './history-page-component.css',
})

export class HistoryPageComponent {
  listResults$:Observable<any[]> = of([]);
  public searchService=inject(SearchService)

  receiveData($texto:any)
  {
   this.listResults$ = this.searchService.searchTracks$($texto);
  }
}
