import {Component, inject, OnDestroy, OnInit, signal, WritableSignal} from '@angular/core';
import {SectionGenericComponent} from '@shared/components/section-generic-component/section-generic-component';
import {TrackModel} from '@core/models/tracks.model';
import {TrackService} from '@modules/tracks/services/track-service';
import {Subscription} from 'rxjs';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-tracks-page-component',
  imports: [
    SectionGenericComponent
  ],
  templateUrl: './tracks-page-component.html',
  styleUrl: './tracks-page-component.css',
})


export class TracksPageComponent {

  private trackService = inject(TrackService);

  // 2. Declaramos las Signals vinculadas directamente a los Observables del servicio
  // toSignal se encarga de: subscribirse, desubscribirse y guardar el valor de forma automatica.

  tracksTrending = toSignal(this.trackService.getAllTracks$(), { initialValue: [] });
  tracksRandom = toSignal(this.trackService.getAllRandom$(), { initialValue: [] });

}
