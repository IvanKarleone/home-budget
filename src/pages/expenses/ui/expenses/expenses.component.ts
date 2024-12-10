import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AddExpenseComponent } from '@features/add-expense';
import { ExpensesStorageService } from '@shared/api';
import { PaginationListComponent } from '@shared/ui';

import { ExpensesListComponent } from '../expenses-list/expenses-list.component';

@Component({
  selector: 'hb-expenses',
  imports: [AddExpenseComponent, ExpensesListComponent, PaginationListComponent],
  templateUrl: './expenses.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'mx-auto flex w-full flex-col items-center md:w-3/4 lg:w-1/2 xl:w-1/3',
  },
})
export class ExpensesComponent {
  protected readonly expensesStorage = inject(ExpensesStorageService);
}
