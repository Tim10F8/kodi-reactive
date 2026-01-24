// ==========================================================================
// Genre Domain Providers
// ==========================================================================

import { Provider } from '@angular/core';
import { GenreRepository } from './domain/repositories/genre.repository';
import { GenreKodiRepository } from './infrastructure/repositories/genre-kodi.repository';

/**
 * Provides Genre domain dependencies
 * Use this in app.config.ts or feature module
 */
export const GENRE_PROVIDERS: Provider[] = [
  {
    provide: GenreRepository,
    useClass: GenreKodiRepository
  }
];
