import { inject, Injectable } from '@angular/core';
import { AlertService } from '@shared/model';

import type { ExpenseCurrency } from '../expense-currency.types';

@Injectable({
  providedIn: 'root',
})
export class ExpenseAlertService {
  readonly #alertService = inject(AlertService);

  afterAdd(amount: number, currency: ExpenseCurrency): void {
    const label = 'Add expense';
    const content = `You have added ${amount} ${currency} in your expenses`;

    this.#alertService.showPositiveMessage(label, content);
  }

  afterUpdate(): void {
    const label = 'Update expense';
    const content = `You have updated the expense`;

    this.#alertService.showPositiveMessage(label, content);
  }

  afterDelete(): void {
    const label = 'Delete expense';
    const content = `You have deleted the expense`;

    this.#alertService.showPositiveMessage(label, content);
  }
}
