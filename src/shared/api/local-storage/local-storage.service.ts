import { Injectable } from '@angular/core';

import { InternalStorageService } from '../internal-storage/internal-storage.service';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService extends InternalStorageService {
  constructor() {
    super(localStorage);
  }
}
