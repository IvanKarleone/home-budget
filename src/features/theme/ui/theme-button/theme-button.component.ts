import { AsyncPipe } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { ThemeService } from '@features/theme/model/theme.service';
import { Theme } from '@features/theme/model/theme.type';
import {
  INTERNAL_STORAGE_KEY,
  InternalLocalStorageService,
  InternalStorageService,
} from '@shared/api';
import { TuiBreakpointService, TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'hb-theme-button',
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

  readonly themeChange = output<Theme>();

  ngAfterViewInit(): void {
    this.themeChange.emit(this.themeService.theme());
  }

  toggle(): void {
    this.themeService.toggle();
    this.themeChange.emit(this.themeService.theme());
  }
}
