import { isDevMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import * as Sentry from '@sentry/angular';

import { SENTRY_RELEASE } from '../sentry/environments';
import { appConfig } from './app/config/app.config';
import { RootComponent } from './app/root.component';

// enable only for production
if (!isDevMode()) {
  Sentry.init({
    dsn: 'https://8422b9cd0e90850d9eab280072323d8d@o4510260499382272.ingest.de.sentry.io/4510260610662480',
    sendDefaultPii: true,
    environment: 'production',
    release: SENTRY_RELEASE,
  });
}

bootstrapApplication(RootComponent, appConfig).catch(err => new Error(err));
