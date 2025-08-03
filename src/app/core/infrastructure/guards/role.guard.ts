import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const requiredRoles = route.data['roles'] as string[];
    const userRoles = this.getUserRoles();

    if (
      requiredRoles &&
      requiredRoles.some((role) => userRoles.includes(role))
    ) {
      return true;
    }

    this.router.navigate(['/unauthorized']);
    return false;
  }

  private getUserRoles(): string[] {
    const token = localStorage.getItem('authToken');
    if (!token) return [];

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.roles || [];
    } catch {
      return [];
    }
  }
}
