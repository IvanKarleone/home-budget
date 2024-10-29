import { inject, Injectable, InjectionToken } from '@angular/core';
import { INTERNAL_STORAGE_SETTINGS } from '../../tokens/internal-storage-settings.token';
import { IInternalStorage } from '../../models/internal-storage.model';

@Injectable({
  providedIn: 'root',
})
export class InternalStorageService implements IInternalStorage {
  private readonly storageSettings = inject(INTERNAL_STORAGE_SETTINGS);
  private readonly storage = this.storageSettings.instance;
  private readonly storageKey = this.storageSettings.key;

  getBooleanItem(): boolean {
    return this.getItem() === 'true';
  }

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
