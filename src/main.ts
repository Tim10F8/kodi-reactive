import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { addIcons } from 'ionicons';
import {
  play,
  pause,
  add,
  close,
  closeOutline,
  playOutline,
  pauseOutline,
  shuffleOutline,
  repeatOutline,
  beerOutline,
  chevronForward,
  chevronBack,
  search,
  musicalNotes,
  disc,
  people,
  albums,
  duplicateOutline,
  eyeOutline,
  share,
  trash
} from 'ionicons/icons';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { environment } from './environments/environment';
import { addIcons } from 'ionicons';
import {
  playOutline,
  duplicateOutline,
  eyeOutline,
  share,
  trash,
  add,
  play,
  closeOutline
} from 'ionicons/icons';

// Register icons globally
addIcons({
  play,
  pause,
  add,
  close,
  closeOutline,
  playOutline,
  pauseOutline,
  shuffleOutline,
  repeatOutline,
  beerOutline,
  chevronForward,
  chevronBack,
  search,
  musicalNotes,
  disc,
  people,
  albums,
  duplicateOutline,
  eyeOutline,
  share,
  trash
});

if (environment.production) {
  enableProdMode();
}

// Register all icons globally
addIcons({
  playOutline,
  duplicateOutline,
  eyeOutline,
  share,
  trash,
  add,
  play,
  closeOutline
});

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
