import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-search-component',
  imports: [
    FormsModule
  ],
  templateUrl: './search-component.html',
  styleUrl: './search-component.css',
})

//el codigo tiene como desventaja que cada vez que se teclee en la barra de busquedas se emitira un evento
export class SearchComponent
  {
    //para enviar datos de la clase hijo a la clase padre
    @Output() callbackData:EventEmitter<any> = new EventEmitter();

    src:string = ""

    callSearch($event: string)
      {
            this.callbackData.emit($event);

     }
}
