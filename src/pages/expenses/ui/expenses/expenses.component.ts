import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AddExpenseComponent } from '@features/add-expense';
import { ExpensesStorageService } from '@shared/api';

import { ExpensesListComponent } from '../expenses-list/expenses-list.component';

@Component({
  selector: 'hb-expenses',
  imports: [AddExpenseComponent, ExpensesListComponent],
  templateUrl: './expenses.component.html',
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 16px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpensesComponent {
  protected readonly expensesStorage = inject(ExpensesStorageService);
}
