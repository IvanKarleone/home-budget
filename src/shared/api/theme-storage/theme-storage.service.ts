import { computed, inject, Injectable, signal } from '@angular/core';
import { LocalStorageService } from '@shared/api';

import type { Theme } from '../../model/theme/theme.type';

@Injectable({
  providedIn: 'root',
})
export class ThemeStorageService {
  private readonly storageService = inject(LocalStorageService);
  private readonly key = 'theme';

  private _theme = signal<Theme>((this.storageService.getItem(this.key) as Theme) ?? 'light');
  readonly isDarkMode = computed(() => this._theme() === 'dark');

  toggle(): void {
    const newTheme = this._theme() === 'dark' ? 'light' : 'dark';

    this._theme.set(newTheme);
    this.storageService.setItem(newTheme, this.key);
  }
}
