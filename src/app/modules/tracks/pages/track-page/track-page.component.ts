import { Component, OnDestroy, OnInit } from '@angular/core';
import * as dataRaw from '../../../../data/tracks.json';
import { TrackModel } from '@core/models/tracks.model';
import { TracksService } from '@modules/tracks/services/tracks.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css']
})
export class TrackPageComponent implements OnInit, OnDestroy{

  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []

  listObservers$: Array<Subscription> = []

  constructor(private trackService: TracksService){}

  ngOnInit(): void {
   const observer1$ = this.trackService.dataTracksTrending$
    .subscribe(response => {
      this.tracksTrending = response;
    })

    this.listObservers$ = [observer1$]
  }

  ngOnDestroy():void{
    this.listObservers$.forEach(u => u.unsubscribe());
  }
}
