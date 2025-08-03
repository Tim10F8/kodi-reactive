import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

// Infrastructure providers
import { INFRASTRUCTURE_PROVIDERS } from './infrastructure/infrastructure.providers';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    ...INFRASTRUCTURE_PROVIDERS,
    provideHttpClient(withInterceptors([])),
  ],
})
export class CoreModule {
  // Prevent re-import of CoreModule
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only.'
      );
    }
  }
}
