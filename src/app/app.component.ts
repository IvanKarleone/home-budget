import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DarkModeButtonComponent } from './components/dark-mode-button/dark-mode-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DarkModeButtonComponent],
  templateUrl: './app.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.dark]': 'isOnDarkMode()',
  },
})
export class AppComponent {
  isOnDarkMode = signal(false);
}
