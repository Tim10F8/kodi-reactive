import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { IonicModule, ItemReorderEventDetail } from '@ionic/angular';
import { NgFor, NgIf } from '@angular/common';
import { AssetsPipe } from '../../core/pipes/assets.pipe';
import { PlaylistItem } from '@domains/music/playlist';
import {
  ClearPlaylistUseCase,
  RemovePlaylistItemUseCase,
  ReorderPlaylistUseCase,
  PlayPlaylistItemUseCase
} from '@domains/music/playlist';

@Component({
    selector: 'app-current-play-list',
    templateUrl: './current-play-list.component.html',
    styleUrls: ['./current-play-list.component.scss'],
    imports: [IonicModule, NgFor, NgIf, AssetsPipe]
})
export class CurrentPlayListComponent {
  private readonly clearPlaylistUseCase = inject(ClearPlaylistUseCase);
  private readonly removePlaylistItemUseCase = inject(RemovePlaylistItemUseCase);
  private readonly reorderPlaylistUseCase = inject(ReorderPlaylistUseCase);
  private readonly playPlaylistItemUseCase = inject(PlayPlaylistItemUseCase);

  @Input() playlist: PlaylistItem[] = [];
  @Input() currentTrackPosition: number | null | undefined = null;
  @Input() playlistId: number = 0;
  @Input() reorderEnabled: boolean = false;

  @Output() playlistChanged = new EventEmitter<void>();

  clearList() {
    this.clearPlaylistUseCase.execute(this.playlistId).subscribe({
      next: () => {
        this.playlist = [];
        this.playlistChanged.emit();
      },
      error: (err) => console.error('Failed to clear playlist:', err)
    });
  }

  playItem(position: number) {
    this.playPlaylistItemUseCase.execute(position, this.playlistId).subscribe({
      error: (err) => console.error('Failed to play item:', err)
    });
  }

  removeItem(position: number, event: Event) {
    event.stopPropagation();
    this.removePlaylistItemUseCase.execute(position, this.playlistId).subscribe({
      next: () => {
        this.playlist = this.playlist.filter((_, idx) => idx !== position);
        this.playlistChanged.emit();
      },
      error: (err) => console.error('Failed to remove item:', err)
    });
  }

  onReorder(event: CustomEvent<ItemReorderEventDetail>) {
    const fromPosition = event.detail.from;
    const toPosition = event.detail.to;

    // Optimistically update UI
    const movedItem = this.playlist[fromPosition];
    this.playlist.splice(fromPosition, 1);
    this.playlist.splice(toPosition, 0, movedItem);

    // Complete the reorder in UI first
    event.detail.complete();

    // Sync with Kodi
    this.reorderPlaylistUseCase.execute(fromPosition, toPosition, this.playlistId).subscribe({
      next: () => {
        this.playlistChanged.emit();
      },
      error: (err) => {
        console.error('Failed to reorder playlist:', err);
        // Revert UI change on error - reload will be handled by parent component
        this.playlistChanged.emit();
      }
    });
  }

  toggleReorder() {
    this.reorderEnabled = !this.reorderEnabled;
  }
}
