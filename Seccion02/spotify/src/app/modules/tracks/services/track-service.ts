import {catchError, Observable, Observer, of} from 'rxjs';
import {TrackModel} from '@core/models/tracks.model';
import {HttpClient, HttpHeaders,} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment.development';
import {map} from "rxjs/operators"

//un service es para realizar el manejo de logica de datos con el backend
//como la obtencion de datos mediante apis


//injectable sirve para que puerda ser usado en cualquier seccion de codigo
//root es para que la instancia sea singleton
@Injectable({
  providedIn: 'root',
})

export class TrackService {
  private readonly URL = environment.api;

  constructor(private httpClient: HttpClient) {

  }

  getAllTracks$(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer Token' // Asegúrate de escribirlo bien
    });
    return this.httpClient.get(`${this.URL}/tracks`,{headers: headers})
      .pipe(
        map((dataRaw: any) => {
          // Aquí entramos a la propiedad "data" del JSON que mostraste
          return dataRaw.data;
        })
      );
  }


  getAllRandom$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`)
      .pipe(
        // Operador 1: Transformación
        map((dataRaw: any) => {
          return dataRaw.data.reverse();
        }), // Aquí cierra el map

        // Operador 2: Manejo de errores (Separado por coma)
        catchError((error) => {
          console.log("Ocurrió un error en la petición:", error);
          return of([]); // Importante: USAR RETURN para devolver un observable vacío
        })
      );
  }
}
