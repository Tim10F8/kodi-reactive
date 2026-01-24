import { Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { AlbumListComponent } from '@domains/music/album';
import { ArtistsComponent } from '../components/artists/artists.component';
import { GenreListComponent, GenreDetailComponent } from '@domains/music/genre';

export const TAB1_ROUTES: Routes = [
  {
    path: 'collections',
    component: Tab1Page,
    children: [
      {
        path: 'albums',
        component: AlbumListComponent,
      },
      {
        path: 'artists',
        component: ArtistsComponent,
      },
      {
        path: 'genres',
        component: GenreListComponent,
      },
      {
        path: 'genres/:genreId',
        component: GenreDetailComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: 'collections/albums',
    pathMatch: 'full',
  },
];
