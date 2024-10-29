import { InjectionToken } from '@angular/core';
import { IInternalStorageSettings } from '../models/internal-storage-settings.model';

export const INTERNAL_STORAGE_SETTINGS = new InjectionToken<IInternalStorageSettings>(
  'INTERNAL_STORAGE_SETTINGS'
);
