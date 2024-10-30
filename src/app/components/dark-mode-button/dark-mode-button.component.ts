import { AfterViewInit, ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode/dark-mode.service';
import { InternalStorageService } from '../../services/internal-storage/internal-storage.service';
import { INTERNAL_STORAGE_SETTINGS } from '../../tokens/internal-storage-settings.token';
import { createInternalStorageSettings } from '../../utils/create-internal-storage-settings';
import { TuiBreakpointService, TuiButton, TuiIcon } from '@taiga-ui/core';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-dark-mode-button',
  standalone: true,
  imports: [AsyncPipe, TuiIcon, TuiButton],
  templateUrl: './dark-mode-button.component.html',
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
    DarkModeService,
    InternalStorageService,
    {
      provide: INTERNAL_STORAGE_SETTINGS,
      useFactory: () =>
        createInternalStorageSettings({
          instance: localStorage,
          key: 'dark-mode',
        }),
    },
  ],
})
export class DarkModeButtonComponent implements AfterViewInit {
  readonly darkModeService = inject(DarkModeService);
  readonly breakpoint$ = inject(TuiBreakpointService);

  readonly darkModeChange = output<boolean>();

  ngAfterViewInit(): void {
    this.darkModeChange.emit(this.darkModeService.isOnDarkMode());
  }

  toggle(): void {
    this.darkModeService.toggle();
    this.darkModeChange.emit(this.darkModeService.isOnDarkMode());
  }
}
