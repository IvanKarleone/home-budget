import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThemeStorageService } from '@shared/api';
import { TuiIcon } from '@taiga-ui/core';
import { TuiSwitch } from '@taiga-ui/kit';

@Component({
  selector: 'hb-switch-theme',
  imports: [FormsModule, TuiSwitch, TuiIcon],
  templateUrl: './switch-theme.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'inline-flex gap-3',
  },
})
export class SwitchThemeComponent {
  readonly themeStorageService = inject(ThemeStorageService);

  readonly switchTheme = output<void>();

  toggle(): void {
    this.themeStorageService.toggle();
    this.switchTheme.emit();
  }
}
