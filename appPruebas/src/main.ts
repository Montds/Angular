import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

//inicia el servidor front end
bootstrapApplication(App, appConfig).catch((err) => console.error(err));

