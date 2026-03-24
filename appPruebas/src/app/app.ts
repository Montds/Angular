import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root', //etiqueta html que tendra este componente
  imports: [RouterOutlet], //es el contenedor de componentes de spirng
  templateUrl: './app.html',//plantilla de este componente html
  styleUrl: './app.css' //estilo css que tendra este componente
})

export class App {
  //si se cambia el titulo el codigo no se renderiza la pagina entera solo el titulo se renderiza
  protected readonly title = signal('appPruebas');
}
