import {Component, Input, input, OnInit} from '@angular/core';
import {TrackModel} from '@core/models/tracks.model';
import {OrderListPipe} from '@shared/pipe/order-list-pipe';
import {ImgBroken} from '@shared/directives/img-broken';

@Component({
  selector: 'app-play-list-body-component',
  imports: [
    OrderListPipe,
    ImgBroken
  ],
  templateUrl: './play-list-body-component.html',
  styleUrl: './play-list-body-component.css',
})
export class PlayListBodyComponent  {
    @Input() tracks:TrackModel[] = [];
    optionSort:{property:string | null, order:string  } ={property:null,order:"asc"};

  changeSort(property: string): void
  {
     const nextOrder = this.optionSort.order === 'asc' ? 'desc' : 'asc';
     this.optionSort = { property, order: nextOrder };
  }
}
