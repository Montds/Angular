import { HttpInterceptorFn } from '@angular/common/http';
import {inject} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

export const injectSessionInterceptor: HttpInterceptorFn = (req, next) => {

  const cookieService = inject(CookieService);

  const token = cookieService.get('token');

  // Si existe el token, clonamos la petición y agregamos el header
  if (token)
  {
    const newRequest = req.clone(
         {
          setHeaders:
              {
                  Authorization: `Bearer ${token}`
              }
         }
    );
    return next(newRequest);
  }

  // Si no hay token, la petición sigue su curso normal
  return next(req);
};
