import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { AlbumComponent } from '../components/album/album.component';
import { ArtistsComponent } from '../components/artists/artists.component';
import { GenresComponent } from '../components/genres/genres.component';

const routes: Routes = [
  {
    path: 'media',
    component: Tab1Page,
    children: [
      {
        path: 'albums',
        component: AlbumComponent,
      },
      {
        path: 'artists',
        component: ArtistsComponent,
      },
      {
        path: 'genres',
        component: GenresComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: 'media/albums',
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab1PageRoutingModule {}
