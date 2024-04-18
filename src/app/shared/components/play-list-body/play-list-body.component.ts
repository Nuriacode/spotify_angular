import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../data/tracks.json';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit{
  tracks: Array <TrackModel> = [];

  ngOnInit(){
    const {data} : any = (dataRaw as any).default
    console.log(data)
    this.tracks = data;
  }
}
