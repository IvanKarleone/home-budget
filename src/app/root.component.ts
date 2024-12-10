import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeStorageService } from '@shared/api/theme-storage/theme-storage.service';
import type { Theme } from '@shared/model';
import { TuiRoot } from '@taiga-ui/core';

import { MenuComponent } from './ui/menu/menu.component';

@Component({
  selector: 'hb-root',
  imports: [RouterOutlet, TuiRoot, MenuComponent],
  templateUrl: './root.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block',
  },
})
export class RootComponent {
  private readonly themeStorage = inject(ThemeStorageService);

  readonly theme = computed<Theme>(() => (this.themeStorage.isDarkMode() ? 'dark' : 'light'));
}
