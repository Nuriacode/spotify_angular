import { Component, OnDestroy, OnInit } from '@angular/core';
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
    this.loadDataAll()
    this.loadDataRandom()
  }

  async loadDataAll():Promise<any>{
    this.tracksTrending = await this.trackService.getAllTracks$().toPromise();

  }

  loadDataRandom():void{
    this.trackService.getAllRandom$()
    .subscribe((response: TrackModel[]) => {
      this.tracksRandom = response
    })
  }

  ngOnDestroy():void{
  }
}
