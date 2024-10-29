import { computed, inject, Injectable, signal } from '@angular/core';
import { InternalStorageService } from '../internal-storage/internal-storage.service';

@Injectable()
export class DarkModeService {
  private readonly internalStorageService = inject(InternalStorageService);

  private _isOnDarkMode = signal(this.internalStorageService.getBooleanItem());
  isOnDarkMode = computed(() => this._isOnDarkMode());

  toggle(): void {
    const reversedDarkMode = !this._isOnDarkMode();

    this._isOnDarkMode.set(reversedDarkMode);
    this.internalStorageService.setItem(reversedDarkMode);
  }
}
