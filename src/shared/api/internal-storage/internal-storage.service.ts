import { inject, Injectable } from '@angular/core';

import { INTERNAL_STORAGE_KEY } from './internal-storage-key.token';
import { TInternalStorage } from './internal-storage.type';

@Injectable()
export class InternalStorageService implements TInternalStorage {
  protected readonly storage!: Storage;
  protected readonly key = inject(INTERNAL_STORAGE_KEY);

  getItem(): string | null {
    return this.storage.getItem(this.key);
  }

  removeItem(): void {
    this.storage.removeItem(this.key);
  }

  setItem(value: unknown): void {
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }

    this.storage.setItem(this.key, `${value}`);
  }
}
