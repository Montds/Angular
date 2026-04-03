import {CanActivateFn, Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {inject} from '@angular/core';

export const sessionGuard: CanActivateFn = (route, state) => {
  const cookieService = inject(CookieService);
  const router = inject(Router);

  // 1. Verificamos si existe la cookie
  const hasToken: boolean = cookieService.check('token');

  if (!hasToken) {
    // Si NO hay token, redirigimos directamente al login
    // Al devolver el comando de navegación, Angular cancela la ruta actual
    // y te manda a /auth/login de un solo golpe.
    console.warn('Acceso denegado: redirigiendo...');
    return router.parseUrl('/auth/login');
  }

  // 2. Si hay token, permitimos el paso
  return true;
};
