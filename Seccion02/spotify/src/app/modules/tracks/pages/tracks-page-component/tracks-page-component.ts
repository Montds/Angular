import {Component, OnInit} from '@angular/core';
import {SectionGenericComponent} from '@shared/components/section-generic-component/section-generic-component';
import * as dataRow from "../../../../data/tracks.json";
import {TrackModel} from '@core/models/tracks.model';

@Component({
  selector: 'app-tracks-page-component',
  imports: [
    SectionGenericComponent
  ],
  templateUrl: './tracks-page-component.html',
  styleUrl: './tracks-page-component.css',
})
export class TracksPageComponent implements OnInit {

  mockTracksList: Array<TrackModel>=[]

  ngOnInit(): void {
    //se obtiene los datos que estan en el json local, se puede adaptar para obtenerlo del backend
    this.mockTracksList = (dataRow as any).default.data ;
  }



}
