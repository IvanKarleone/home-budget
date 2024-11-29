import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TuiAlertService } from '@taiga-ui/core';
import { take } from 'rxjs';

import { ExpensesStorageService } from '../../api/expenses-storage/expenses-storage.service';
import type { IExpense } from '../../model/expense/expense.interface';
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
  providers: [ExpensesStorageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpensesComponent {
  protected readonly expensesStorage = inject(ExpensesStorageService);

  private readonly alerts = inject(TuiAlertService);

  addExpense(expense: IExpense): void {
    this.expensesStorage.addExpense(expense);

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
