import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private loadingMap = new Map<string, boolean>();

  isLoading(): Observable<boolean> {
    return this.loadingSubject.asObservable();
  }

  setLoading(loading: boolean, key: string = 'global'): void {
    this.loadingMap.set(key, loading);
    this.updateLoadingState();
  }

  private updateLoadingState(): void {
    const isLoading = Array.from(this.loadingMap.values()).some(
      (loading) => loading
    );
    this.loadingSubject.next(isLoading);
  }
}
