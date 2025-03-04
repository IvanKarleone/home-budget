import { inject, Injectable } from '@angular/core';
import { TuiAlertService } from '@taiga-ui/core';
import { take } from 'rxjs';

interface IAlert {
  label: string;
  message: string;
  appearance: 'positive' | 'negative';
}

@Injectable({ providedIn: 'root' })
export class AlertService {
  readonly #alert = inject(TuiAlertService);

  showPositiveMessage(label: string, message: string): void {
    this.showMessage({ label, message, appearance: 'positive' });
  }

  showNegativeMessage(label: string, message: string): void {
    this.showMessage({ label, message, appearance: 'negative' });
  }

  private showMessage({ label, message, appearance }: IAlert): void {
    this.#alert
      .open(`<span class="font-medium text-sm">${message}</span>`, {
        label,
        appearance,
      })
      .pipe(take(1))
      .subscribe();
  }
}
