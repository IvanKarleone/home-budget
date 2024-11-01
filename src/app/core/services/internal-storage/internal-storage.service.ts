import { inject, Injectable } from '@angular/core';
import { TInternalStorage } from '../../models/internal-storage.type';
import { INTERNAL_STORAGE_SETTINGS } from './internal-storage-settings.token';

@Injectable()
export class InternalStorageService implements TInternalStorage {
  private readonly storageSettings = inject(INTERNAL_STORAGE_SETTINGS);
  private readonly storage = this.storageSettings.instance;
  private readonly storageKey = this.storageSettings.key;

  getItem(): string | null {
    return this.storage.getItem(this.storageKey);
  }

  removeItem(): void {
    this.storage.removeItem(this.storageKey);
  }

  setItem(value: unknown): void {
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }

    this.storage.setItem(this.storageKey, `${value}`);
  }
}
