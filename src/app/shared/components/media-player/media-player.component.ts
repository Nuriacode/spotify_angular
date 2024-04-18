import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent {
  mockCover: TrackModel = {
    cover: 'https://media.timeout.com/images/105654873/1024/768/image.webp',
    album: 'Gioli & Assia',
    name: 'BEBE (Oficial)',
    url: 'htt://localhost/track.mp3',
    _id: 1
  }
}
