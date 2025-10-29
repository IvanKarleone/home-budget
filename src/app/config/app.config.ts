import { ApplicationConfig, ErrorHandler, provideZoneChangeDetection } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from '@app/routes/app.routes';
import * as Sentry from '@sentry/angular';
import { provideValidationErrors } from '@shared/model';
import { NG_EVENT_PLUGINS } from '@taiga-ui/event-plugins';

import { FIREBASE_OPTIONS } from './firebase-options';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    NG_EVENT_PLUGINS,
    provideValidationErrors(),
    provideFirebaseApp(() => initializeApp(FIREBASE_OPTIONS)),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler(),
    },
  ],
};
