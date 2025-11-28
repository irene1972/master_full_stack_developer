import { CanActivateFn,Router  } from '@angular/router';
import { inject } from '@angular/core';

export class AuthGuard implements CanActivateFn {
  private router = inject(Router);

  canActivate(): boolean {
    const isAuthenticated = this.checkIfUserIsAuthenticated();
    if (!isAuthenticated) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

  private checkIfUserIsAuthenticated(): boolean {
    // Implementación ficticia de comprobación de autenticación
    return !!localStorage.getItem('authToken');
  }
}
