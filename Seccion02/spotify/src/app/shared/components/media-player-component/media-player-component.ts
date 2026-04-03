import {Component, ElementRef, inject, signal, viewChild, ViewChild} from '@angular/core';
import {ImgBroken} from '@shared/directives/img-broken';
import {MultimediaService} from '@shared/services/multimedia-service';
import {AsyncPipe} from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-media-player-component',
  imports: [
    ImgBroken,
    AsyncPipe
  ],
  templateUrl: './media-player-component.html',
  styleUrl: './media-player-component.css',
})

export class MediaPlayerComponent {

  public multimediaService = inject(MultimediaService);

  // 1. Referencia al elemento usando la nueva API de Signals
  progressBar = viewChild<ElementRef>('progressBar');

  // 2. Estado manejado con Signals
  state = signal<string>('pause');

  constructor()
  {
    // 3. Suscripción automática que se destruye sola al morir el componente
    this.multimediaService.playerStatus$
      .pipe(takeUntilDestroyed())
      .subscribe(status => this.state.set(status));
  }

  //que posicion en x esta mi mouse respecto a la barra de progreso
  handlePosition(event: MouseEvent): void {
    const elNative: HTMLElement = this.progressBar()?.nativeElement;

    if (!elNative) return;

    const { clientX } = event;
    const { x, width } = elNative.getBoundingClientRect();
    //posicion relativa del mouse sobre el elemento seleccionado
    const clickX = clientX - x;
    const percentageFromX = (clickX * 100) / width;

    this.multimediaService.seekAudio(percentageFromX);
  }
}
