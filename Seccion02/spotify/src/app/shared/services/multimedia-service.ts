import {EventEmitter, Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Observer, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {TrackModel} from '@core/models/tracks.model';

@Injectable({
  providedIn: 'root',
})
export class MultimediaService {


  // 1. Usamos un tipo que acepte undefined explícitamente
  //este se encarga de recibir los datos de las canciones
  public trackInfo$ = new BehaviorSubject<TrackModel | undefined>(undefined);

  //el audio se reproduce en esta clase
  //este se encarga de reproducir el audio
  public audio: HTMLAudioElement;

  //pausa, tiempo actual, tiempo restante
  //se encargan de los estados de los botones pausa, tiempo actual y tiempo restante
  public timeElapsed$:BehaviorSubject<string> = new BehaviorSubject("00:00");
  public timeRemaining$:BehaviorSubject<string> = new BehaviorSubject("-00:00");
  public playerStatus$:BehaviorSubject<string> = new BehaviorSubject("pause");

  //porcentaje de timpo actual de la cancion
  //se encarga de la barrita de progreso del porcentaje de la cancion
  public playerPercentage$:BehaviorSubject<number> = new BehaviorSubject(0);

  constructor()
  {
    this.audio = new Audio();

    this.trackInfo$.subscribe({
      next: (track) => {
        if (track)
        {
          this.setAudio(track);
        }
      },
      error: (err) => console.error(err),
      complete: () => {}
    });

    this.listenAllEvents();
  }

  public setAudio(track: TrackModel): void {
    if (track)
    {
      const baseUrl = 'http://localhost:3000';

      //limpieza la url
      const finalUrl = track.url.startsWith('//')
        ? `${baseUrl}${track.url.replace('//', '/')}`
        : track.url;

      console.log('Reproduciendo desde:', finalUrl);

      //se asigna la url del audio que esta en el servidor
      this.audio.src = finalUrl;

      //se carga la cancion y se reproduce

      this.audio.load(); // Es buena práctica cargar antes de reproducir
      this.audio.play().catch(err => console.warn("Error al reproducir:", err));
    }
  }

  private listenAllEvents(): void
  {
    this.audio.addEventListener('timeupdate', this.calculateTime, false);
    this.audio.addEventListener('play', this.setPlayerStatus, false);
    this.audio.addEventListener('playing', this.setPlayerStatus, false);
    this.audio.addEventListener('pause', this.setPlayerStatus, false); // <--- ERROR AQUÍ: Era 'pause', no 'paused'
    this.audio.addEventListener('ended', this.setPlayerStatus, false);
  }
  private setPlayerStatus = (state: Event) => {
    switch (state.type) {
      case 'play':
      case 'playing':
        this.playerStatus$.next("play");
        break;
      case 'pause': // Este ahora sí entrará porque corregimos el listener
        this.playerStatus$.next("pause");
        break;
      case 'ended':
        this.playerStatus$.next("ended");
        break;
      default:
        this.playerStatus$.next("pause");
        break;
    }
  }
  public togglePLayer():void
  {
    (this.audio.paused)? this.audio.play() : this.audio.pause();
  }


  private calculateTime = () => {
    const duration = this.audio.duration;
    const currentTime = this.audio.currentTime;

    // Validamos que duration sea un número válido (evita NaN al cargar)
    if (!isNaN(duration)) {
      this.setTimeElapsed(currentTime);
      this.setRemaining(currentTime, duration);
      this.setPercentage(currentTime, duration);
    }
  }

  private setTimeElapsed(currentTime: number): void {
    let seconds = Math.floor(currentTime % 60);
    let minutes = Math.floor((currentTime / 60) % 60);

    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;

    const displayFormat = `${displayMinutes}:${displaySeconds}`;
    this.timeElapsed$.next(displayFormat); // Emite al transcurrido
  }

  private setRemaining(currentTime: number, duration: number): void {
    let timeLeft = duration - currentTime;
    let seconds = Math.floor(timeLeft % 60);
    let minutes = Math.floor((timeLeft / 60) % 60);

    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;

    const displayFormat = `-${displayMinutes}:${displaySeconds}`;
    // CORRECCIÓN: Usar el Subject correspondiente al tiempo restante
    this.timeRemaining$.next(displayFormat);
  }
//porcentaje de la barrita de la cancion
  private setPercentage(currentTime:number,duration:number)
  {
    let percentage = (currentTime * 100) / duration;
    this.playerPercentage$.next(percentage);
  }

  //porcentaje que yo asigno
  public seekAudio(percentage: number): void {
    const { duration } = this.audio;
    const percentageToSecond = (percentage * duration) / 100;
    this.audio.currentTime = percentageToSecond;
  }

  }
