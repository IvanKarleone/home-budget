import { inject, Injectable, signal } from '@angular/core';
import { InternalStorageService } from '@shared/api';
import { TTheme } from './theme.type';

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
