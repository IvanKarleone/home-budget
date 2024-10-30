import { TuiRoot } from '@taiga-ui/core';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DarkModeButtonComponent } from './components/dark-mode-button/dark-mode-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TuiRoot, DarkModeButtonComponent],
  templateUrl: './app.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  isOnDarkMode = signal(false);
}
