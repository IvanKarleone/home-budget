import { AfterViewInit, ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { TuiBreakpointService, TuiButton } from '@taiga-ui/core';
import { AsyncPipe } from '@angular/common';
import { INTERNAL_STORAGE_KEY, InternalStorageService } from '@shared/api';
import { ThemeService, TTheme } from '@shared/model';
import { InternalLocalStorageService } from '@shared/api/internal-local-storage/internal-local-storage.service';

@Component({
  selector: 'app-theme-button',
  standalone: true,
  imports: [AsyncPipe, TuiButton],
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
    {
      provide: INTERNAL_STORAGE_KEY,
      useValue: 'theme',
    },
    {
      provide: InternalStorageService,
      useClass: InternalLocalStorageService,
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
