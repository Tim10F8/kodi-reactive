import { Provider } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// Base classes
import { BaseRepository } from './base/base-repository';
import { BaseApiService } from './base/base-api.service';

// Services
import { LoggerService } from './services/logger.service';
import { NotificationService } from './services/notification.service';
import { LoadingService } from './services/loading.service';
import { ErrorHandlerService } from './services/error-handler.service';

// Interceptors
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { LoadingInterceptor } from './interceptors/loading.interceptor';

// Guards
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

export const INFRASTRUCTURE_PROVIDERS: Provider[] = [
  // Base classes
  BaseApiService,

  // Services
  LoggerService,
  NotificationService,
  LoadingService,
  ErrorHandlerService,

  // Interceptors
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },

  // Guards
  AuthGuard,
  RoleGuard,
];
