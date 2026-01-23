import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SoundComponent } from './sound/sound.component';
import { PlayerControlComponent } from './player-control/player-control.component';
import { CommonModule } from '@angular/common';
import { CurrentTrackComponent } from './current-track/current-track.component';
import { PipesModule } from '../core/pipes/pipes-module';
import { CurrentPlayListComponent } from './current-play-list/current-play-list.component';
import { ArtistsComponent } from './artists/artists.component';
import { AlbumComponent } from './album/album.component';
import { DirectivesModule } from '../directives/directives.module';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { GenresComponent } from './genres/genres.component';
import { AlbumSquareComponent } from './album-square/album-square.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { TrackItemComponent } from './track-item/track-item.component';
import { LateralSlideComponent } from './lateral-slide/lateral-slide.component';
import { GenreDetailComponent } from './genre-detail/genre-detail.component';
import { SquareItemComponent } from './square-item/square-item.component';

@NgModule({
    exports: [
        SoundComponent,
        PlayerControlComponent,
        CurrentTrackComponent,
        CurrentPlayListComponent,
        ArtistsComponent,
        ArtistDetailComponent,
        AlbumComponent,
        AlbumDetailComponent,
        GenresComponent,
        AlbumSquareComponent,
        TrackItemComponent,
        LateralSlideComponent,
        GenresComponent,
        SquareItemComponent,
    ],
    imports: [IonicModule, CommonModule, PipesModule, DirectivesModule, SoundComponent,
        PlayerControlComponent,
        CurrentTrackComponent,
        CurrentPlayListComponent,
        ArtistsComponent,
        ArtistDetailComponent,
        AlbumComponent,
        AlbumDetailComponent,
        GenresComponent,
        AlbumSquareComponent,
        TrackItemComponent,
        LateralSlideComponent,
        GenresComponent,
        GenreDetailComponent,
        SquareItemComponent],
    providers: [],
})
export class ComponentsModule {}
