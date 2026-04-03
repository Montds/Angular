import { Component } from '@angular/core';
import {ImgBroken} from '@shared/directives/img-broken';

@Component({
  selector: 'app-not-found-component',
  imports: [
    ImgBroken
  ],
  templateUrl: './not-found-component.html',
  styleUrl: './not-found-component.css',
})
export class NotFoundComponent {

}
