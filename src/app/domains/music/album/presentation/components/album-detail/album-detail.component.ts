import {
  Component,
  ChangeDetectionStrategy,
  input,
  output
} from '@angular/core';
import {
  IonContent,
  IonImg,
  IonList,
  IonItem,
  IonLabel,
  IonNote,
  IonButtons,
  IonButton,
  IonIcon
} from '@ionic/angular/standalone';

import { Album } from '../../../domain/entities/album.entity';
import { Track } from '@domains/music/track/domain/entities/track.entity';
import { AssetsPipe } from '@core/pipes/assets.pipe';
import { ArrayToStringPipe } from '@core/pipes/array-to-string.pipe';
import { SecondsToStringPipe } from '@core/pipes/seconds-to-string.pipe';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [
    IonContent,
    IonImg,
    IonList,
    IonItem,
    IonLabel,
    IonNote,
    IonButtons,
    IonButton,
    IonIcon,
    AssetsPipe,
    ArrayToStringPipe,
    SecondsToStringPipe
  ],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumDetailComponent {
  // Inputs
  readonly album = input.required<Album>();
  readonly tracks = input<Track[]>([]);

  // Outputs
  readonly trackSelected = output<Track>();

  onPlayTrack(track: Track): void {
    this.trackSelected.emit(track);
  }

  onAddTrack(track: Track): void {
    // TODO: Implement add to queue
    console.log('Add track to queue:', track);
  }
}
