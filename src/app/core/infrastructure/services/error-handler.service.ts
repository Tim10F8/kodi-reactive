import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { LoggerService } from './logger.service';
import { NotificationService } from './notification.service';

export interface DomainError {
  code: string;
  message: string;
  details?: any;
}

@Injectable()
export class ErrorHandlerService {
  constructor(
    private logger: LoggerService,
    private notification: NotificationService
  ) {}

  handleHttpError(error: HttpErrorResponse): void {
    this.logger.error('HTTP Error occurred:', error);

    let errorMessage: string;

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Client Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = this.getServerErrorMessage(error);
    }

    this.notification.error('Error', errorMessage);
  }

  handleDomainError(error: DomainError): void {
    this.logger.error('Domain Error occurred:', error);
    this.notification.error('Business Rule Violation', error.message);
  }

  handleUnknownError(error: any): void {
    this.logger.error('Unknown Error occurred:', error);
    this.notification.error(
      'Unexpected Error',
      'An unexpected error occurred. Please try again.'
    );
  }

  private getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
      case 400:
        return 'Bad Request: Please check your input.';
      case 401:
        return 'Unauthorized: Please log in again.';
      case 403:
        return "Forbidden: You don't have permission to perform this action.";
      case 404:
        return 'Not Found: The requested resource was not found.';
      case 500:
        return 'Internal Server Error: Please try again later.';
      default:
        return `Server Error: ${error.message}`;
    }
  }
}
