import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, mergeMap, tap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TracksService {

  private readonly URL = environment.api;

  constructor(private httpClient: HttpClient) {}

  private skipById(listTracks: TrackModel[], id: number): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = listTracks.filter( a => a._id !== id)
      resolve(listTmp)
    })
  }

  getAllTracks$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`)
    .pipe(
      map(({data}:any) => {
        return data
      })
    )
  }

  getAllRandom$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`)
    .pipe(
      mergeMap(({data}:any) => this.skipById(data,2)),
      // map(({dataRevertida}:any) => {
      //   return dataRevertida.filter((track: TrackModel) => track._id)
      // })
      tap(data => console.log('tap', data)),
      catchError((err) => {
        const { status, statusText } = err;
        console.log('algo pasó revísame', [status, statusText]);
        return of([])
      })
    )
  }
  
}
