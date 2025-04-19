import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Track } from 'src/app/core/models/track';

@Component({
  selector: 'app-track-item',
  templateUrl: './track-item.component.html',
  styleUrls: ['./track-item.component.scss'],
})
export class TrackItemComponent {
  @Input() track: Track | null = null;
  @Output() sendToPlaylist = new EventEmitter<Track>();
  constructor() {}

  sendToPlayList(track: Track | null) {
    if (!track) {
      return;
    }
    console.log('sendToPlayList', track);
    this.sendToPlaylist.emit(track);
  }
}
