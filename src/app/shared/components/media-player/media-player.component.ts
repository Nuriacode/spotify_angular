import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy{
  mockCover: TrackModel = {
    cover: 'https://media.timeout.com/images/105654873/1024/768/image.webp',
    album: 'Gioli & Assia',
    name: 'BEBE (Oficial)',
    url: 'htt://localhost/track.mp3',
    _id: 1
  }

  listObservers$: Array<Subscription> = []

  constructor(private _multimediaService: MultimediaService){}

  ngOnInit(): void {
    const observer1$: Subscription = this._multimediaService.callback.subscribe(
      (response: TrackModel) => {
        console.log('Recibiendo canción',  response)
      }
    )

    this.listObservers$ = [observer1$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
    console.log('boom')
  }
}
