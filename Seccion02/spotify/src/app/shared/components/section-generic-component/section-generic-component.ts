import {Component, Input, OnInit} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {TrackModel} from '@core/models/tracks.model';
import {CardPlayerComponent} from '@shared/components/card-player-component/card-player-component';
import {TrackService} from '@modules/tracks/services/track-service';

@Component({
  selector: 'app-section-generic-component',
  imports: [
    CardPlayerComponent
  ],
  templateUrl: './section-generic-component.html',
  styleUrl: './section-generic-component.css',
})
export class SectionGenericComponent {

  //input significa que recibe los argumentos al momentos de crear el componente
  @Input() title:string="";
  @Input() mode:"small" |"big"="big";
  @Input() dataTracks:Array<TrackModel>=[]

}
