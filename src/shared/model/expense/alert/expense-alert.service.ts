import { inject, Injectable } from '@angular/core';
import { TuiAlertService } from '@taiga-ui/core';
import { take } from 'rxjs';

import type { ExpenseCurrency } from '../expense-currency.types';

@Injectable({
  providedIn: 'root',
})
export class ExpenseAlertService {
  private readonly alert = inject(TuiAlertService);

  afterAdd(amount: number, currency: ExpenseCurrency): void {
    const label = 'Add expense';
    const content = `You have added ${amount} ${currency} in your expenses`;

    this.openPositive(label, content);
  }

  afterUpdate(): void {
    const label = 'Update expense';
    const content = `You have updated the expense`;

    this.openPositive(label, content);
  }

  afterDelete(): void {
    const label = 'Delete expense';
    const content = `You have deleted the expense`;

    this.openPositive(label, content);
  }

  private openPositive(label: string, content: string): void {
    this.alert
      .open(`<span class="font-medium text-sm">${content}</span>`, {
        label,
        appearance: 'positive',
      })
      .pipe(take(1))
      .subscribe();
  }
}
