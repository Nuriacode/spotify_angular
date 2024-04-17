import { Component } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent {
  mockCover: any = {
    cover: 'https://media.timeout.com/images/105654873/1024/768/image.webp',
    album: 'Gioli & Assia',
    name: 'BEBE (Oficial)'
  }
}
