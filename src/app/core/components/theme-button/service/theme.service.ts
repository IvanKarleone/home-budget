import { computed, inject, Injectable, signal } from '@angular/core';
import { InternalStorageService } from '../../../services/internal-storage/internal-storage.service';
import { TTheme } from '../../../models/theme.type';

@Injectable()
export class ThemeService {
  private readonly internalStorageService = inject(InternalStorageService);

  private _theme = signal<TTheme>(
    this.internalStorageService.getItem() === 'dark' ? 'dark' : 'light'
  );
  readonly theme = computed(() => this._theme());

  toggle(): void {
    const newTheme = this._theme() === 'dark' ? 'light' : 'dark';

    this._theme.set(newTheme);
    this.internalStorageService.setItem(newTheme);
  }
}
