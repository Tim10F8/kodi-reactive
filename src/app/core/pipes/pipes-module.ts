import { NgModule } from '@angular/core';
import { AssetsPipe } from './assets.pipe';
import { ZeroPaddingPipe } from './zero-padding.pipe';
import { ArrayToStringPipe } from './array-to-string.pipe';
import { SecondsToStringPipe } from './seconds-to-string.pipe';

@NgModule({
  imports: [
    AssetsPipe,
    ZeroPaddingPipe,
    ArrayToStringPipe,
    SecondsToStringPipe,
  ],
  exports: [
    AssetsPipe,
    ZeroPaddingPipe,
    ArrayToStringPipe,
    SecondsToStringPipe,
  ],
  declarations: [],
})
export class PipesModule {}
