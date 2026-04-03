import {inject, Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment.development';
import {HttpClient} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {TrackModel} from '@core/models/tracks.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class SearchService {
  private readonly URL = environment.api;
  private httpClient = inject(HttpClient);

  searchTracks$(term: string): Observable<any[]> {
    const cleanTerm = term.toLowerCase().trim(); // .trim() elimina espacios en blanco

    return this.httpClient.get(`${this.URL}/tracks`).pipe(
      map((response: any) => {
        const allTracks = response.data || [];

        // Si el string está vacío (""), devolvemos todo sin filtrar
        if (!cleanTerm) {
          return allTracks;
        }

        // Si tiene texto, filtramos por las primeras letras
        return allTracks.filter((track: any) =>
          track.name.toLowerCase().startsWith(cleanTerm)
        );
      })
    );
  }
}
