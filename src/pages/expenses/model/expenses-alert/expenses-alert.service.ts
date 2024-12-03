import { inject, Injectable } from '@angular/core';
import { TuiAlertService } from '@taiga-ui/core';
import { take } from 'rxjs';

import { ExpenseCurrency } from '../expense/expense-currency.types';

@Injectable()
export class ExpensesAlertService {
  private readonly alerts = inject(TuiAlertService);

  addExpense(amount: number, currency: ExpenseCurrency): void {
    this.alerts
      .open(
        `<span class="font-medium text-sm">You have added ${amount} ${currency} in your expenses</span>`,
        {
          label: 'New expense',
          appearance: 'positive',
        }
      )
      .pipe(take(1))
      .subscribe();
  }
}
