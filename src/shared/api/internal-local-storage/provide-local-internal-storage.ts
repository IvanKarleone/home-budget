import { Provider } from '@angular/core';

import { InternalStorageService } from '../internal-storage/internal-storage.service';
import { INTERNAL_STORAGE_KEY } from '../internal-storage/internal-storage-key.token';
import { InternalLocalStorageService } from './internal-local-storage.service';

export const provideLocalInternalStorage = (key: string): Provider[] => [
  {
    provide: INTERNAL_STORAGE_KEY,
    useValue: key,
  },
  {
    provide: InternalStorageService,
    useClass: InternalLocalStorageService,
  },
];
