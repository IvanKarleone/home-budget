import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AddExpenseComponent } from '@features/add-expense';
import { ExpensesStorageService } from '@shared/api';

import { ExpensesListComponent } from '../expenses-list/expenses-list.component';

@Component({
  selector: 'hb-expenses',
  imports: [AddExpenseComponent, ExpensesListComponent],
  templateUrl: './expenses.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col items-center gap-4',
  },
})
export class ExpensesComponent {
  protected readonly expensesStorage = inject(ExpensesStorageService);
}
