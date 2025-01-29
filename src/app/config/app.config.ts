import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from '@app/routes/app.routes';
import { NG_EVENT_PLUGINS } from '@taiga-ui/event-plugins';
import { tuiValidationErrorsProvider } from '@taiga-ui/kit';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    NG_EVENT_PLUGINS,
    tuiValidationErrorsProvider({
      required: 'Required to fill',
    }),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'home-budget-897c3',
        appId: '1:346296040686:web:748d0249f3c490a86f07ff',
        storageBucket: 'home-budget-897c3.firebasestorage.app',
        apiKey: 'AIzaSyDampO4KDEv9kDRLOxTsBooMoCFU03XEqI',
        authDomain: 'home-budget-897c3.firebaseapp.com',
        messagingSenderId: '346296040686',
      })
    ),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
  ],
};
