import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { LoggerService } from '../services/logger.service';

export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

@Injectable()
export abstract class BaseRepository<T extends BaseEntity> {
  protected abstract endpoint: string;

  constructor(protected http: HttpClient, protected logger: LoggerService) {}

  findAll(): Observable<T[]> {
    return this.http.get<T[]>(this.endpoint).pipe(
      map((items) => items.map((item) => this.mapFromDto(item))),
      catchError(this.handleError.bind(this))
    );
  }

  findById(id: string): Observable<T | null> {
    return this.http.get<T>(`${this.endpoint}/${id}`).pipe(
      map((item) => (item ? this.mapFromDto(item) : null)),
      catchError(this.handleError.bind(this))
    );
  }

  create(entity: Partial<T>): Observable<T> {
    const dto = this.mapToDto(entity);
    return this.http.post<T>(this.endpoint, dto).pipe(
      map((item) => this.mapFromDto(item)),
      catchError(this.handleError.bind(this))
    );
  }

  update(id: string, entity: Partial<T>): Observable<T> {
    const dto = this.mapToDto(entity);
    return this.http.put<T>(`${this.endpoint}/${id}`, dto).pipe(
      map((item) => this.mapFromDto(item)),
      catchError(this.handleError.bind(this))
    );
  }

  delete(id: string): Observable<void> {
    return this.http
      .delete<void>(`${this.endpoint}/${id}`)
      .pipe(catchError(this.handleError.bind(this)));
  }

  // Abstract methods to be implemented by concrete repositories
  protected abstract mapFromDto(dto: any): T;
  protected abstract mapToDto(entity: Partial<T>): any;

  private handleError(error: HttpErrorResponse): Observable<never> {
    this.logger.error(`Repository error in ${this.constructor.name}:`, error);
    return throwError(() => error);
  }
}
