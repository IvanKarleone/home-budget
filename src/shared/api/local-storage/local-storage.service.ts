import { Injectable } from '@angular/core';

import { InternalStorage } from '../internal-storage/internal-storage';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService extends InternalStorage {
  constructor() {
    super(localStorage);
  }
}
