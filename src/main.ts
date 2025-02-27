import { bootstrapApplication } from '@angular/platform-browser';

import { appConfig } from './app/config/app.config';
import { RootComponent } from './app/root.component';

bootstrapApplication(RootComponent, appConfig).catch(err => new Error(err));
