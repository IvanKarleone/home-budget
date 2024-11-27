import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Theme, ThemeButtonComponent } from '@features/theme';
import { TuiRoot } from '@taiga-ui/core';

@Component({
  selector: 'hb-root',
  standalone: true,
  imports: [RouterOutlet, TuiRoot, ThemeButtonComponent],
  templateUrl: './root.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RootComponent {
  readonly theme = signal<Theme>('light');
}
