import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {injectSessionInterceptor} from '@core/interceptors/inject-session-interceptor';

export const appConfig: ApplicationConfig = {
  providers:
              [
                provideBrowserGlobalErrorListeners(),
                provideRouter(routes),
                provideHttpClient(withInterceptors([injectSessionInterceptor]))
              ]
};
