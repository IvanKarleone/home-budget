import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { provideLocalInternalStorage } from '@shared/api';
import { TuiAlertService } from '@taiga-ui/core';
import { take } from 'rxjs';

import { IExpense } from '../../model/expense/expense.interface';
import { ExpensesInternalStorageService } from '../../model/expenses-internal-storage/expenses-internal-storage.service';
import { AddExpenseFormComponent } from '../add-expense-form/add-expense-form.component';
import { ExpensesListComponent } from '../expenses-list/expenses-list.component';

@Component({
  selector: 'hb-expenses',
  standalone: true,
  imports: [AddExpenseFormComponent, ExpensesListComponent],
  templateUrl: './expenses.component.html',
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 16px;
    }
  `,
  providers: [ExpensesInternalStorageService, ...provideLocalInternalStorage('expenses')],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpensesComponent {
  protected readonly expensesInternalStorage = inject(ExpensesInternalStorageService);

  private readonly alerts = inject(TuiAlertService);

  addExpense(expense: IExpense): void {
    this.expensesInternalStorage.addExpense(expense);

    this.alerts
      .open(
        `<span class="font-medium text-sm">You have added ${expense.amount} ${expense.currency} in your expenses</span>`,
        {
          label: 'New expense',
          appearance: 'positive',
        }
      )
      .pipe(take(1))
      .subscribe();
  }
}
