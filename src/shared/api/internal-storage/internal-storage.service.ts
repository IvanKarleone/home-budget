import { inject, Injectable } from '@angular/core';

import { InternalStorage } from './internal-storage.type';
import { INTERNAL_STORAGE_KEY } from './internal-storage-key.token';

@Injectable()
export class InternalStorageService implements InternalStorage {
  protected readonly storage!: Storage;
  protected readonly key = inject(INTERNAL_STORAGE_KEY);

  getItem(): string | null {
    return this.storage.getItem(this.key);
  }

  getObjectItem<T>(): T | null {
    const objectItem = this.storage.getItem(this.key);

    return objectItem ? (JSON.parse(objectItem) as T) : null;
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
