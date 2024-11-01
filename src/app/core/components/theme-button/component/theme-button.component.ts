import { AfterViewInit, ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { TuiBreakpointService, TuiButton, TuiIcon } from '@taiga-ui/core';
import { AsyncPipe } from '@angular/common';
import { ThemeService } from '../service/theme.service';
import { InternalStorageService } from '../../../services/internal-storage/internal-storage.service';
import { INTERNAL_STORAGE_SETTINGS } from '../../../services/internal-storage/internal-storage-settings.token';
import { createInternalStorageSettings } from '../../../utils/create-internal-storage-settings';
import { TTheme } from '../../../models/theme.type';

@Component({
  selector: 'app-theme-button',
  standalone: true,
  imports: [AsyncPipe, TuiIcon, TuiButton],
  templateUrl: './theme-button.component.html',
  styles: `
    :host {
      display: inline-flex;
      position: fixed;
      top: 5px;
      right: 5px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    ThemeService,
    InternalStorageService,
    {
      provide: INTERNAL_STORAGE_SETTINGS,
      useFactory: () =>
        createInternalStorageSettings({
          instance: localStorage,
          key: 'theme',
        }),
    },
  ],
})
export class ThemeButtonComponent implements AfterViewInit {
  readonly themeService = inject(ThemeService);
  readonly breakpoint$ = inject(TuiBreakpointService);

  readonly themeChange = output<TTheme>();

  ngAfterViewInit(): void {
    this.themeChange.emit(this.themeService.theme());
  }

  toggle(): void {
    this.themeService.toggle();
    this.themeChange.emit(this.themeService.theme());
  }
}
