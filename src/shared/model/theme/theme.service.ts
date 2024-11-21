import { computed, inject, Injectable, signal } from '@angular/core';
import { TTheme } from './theme.type';
import { InternalStorageService } from '@shared/api';

@Injectable()
export class ThemeService {
  private readonly internalStorageService = inject(InternalStorageService);

  private _theme = signal<TTheme>(
    this.internalStorageService.getItem() === 'dark' ? 'dark' : 'light'
  );
  readonly theme = this._theme.asReadonly();

  toggle(): void {
    const newTheme = this._theme() === 'dark' ? 'light' : 'dark';

    this._theme.set(newTheme);
    this.internalStorageService.setItem(newTheme);
  }
}
