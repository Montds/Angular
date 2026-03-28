import {Component, OnInit} from '@angular/core';
import * as dataRow from "../../../data/tracks.json"
import {TrackModel} from '@core/models/tracks.model';
import {OrderListPipe} from '@shared/pipe/order-list-pipe';

@Component({
  selector: 'app-play-list-body-component',
  imports: [
    OrderListPipe
  ],
  templateUrl: './play-list-body-component.html',
  styleUrl: './play-list-body-component.css',
})
export class PlayListBodyComponent implements OnInit {
    tracks:TrackModel[] = [];
    optionSort:{property:string | null, order:string  } ={property:null,order:"asc"};

    ngOnInit(): void {
        this.tracks = (dataRow as any).default.data;
    }

    changeSort(property:string) : void{
      const {order}= this.optionSort;
      this.optionSort ={
        property:property ,
        order: (order==="asc"? "desc":"asc")
      }
      console.log(this.optionSort);
    }

}
