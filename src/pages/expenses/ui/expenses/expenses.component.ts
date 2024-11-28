import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { provideLocalInternalStorage } from '@shared/api';
import { TuiAlertService, TuiIcon } from '@taiga-ui/core';
import { take } from 'rxjs';

import { IExpense } from '../../model/expense/expense.interface';
import { ExpensesInternalStorageService } from '../../model/expenses-internal-storage/expenses-internal-storage.service';
import { AddExpenseFormComponent } from '../add-expense-form/add-expense-form.component';
import { ExpenseCategoryColorPipe } from '../expense-category-color/expense-category-color.pipe';
import { ExpenseCategoryIconPipe } from '../expense-category-icon/expense-category-icon.pipe';
import { ExpenseCurrencySignPipe } from '../expense-currency-sign/expense-currency-sign.pipe';

@Component({
  selector: 'hb-expenses',
  standalone: true,
  imports: [
    NgClass,
    TuiIcon,
    ExpenseCurrencySignPipe,
    ExpenseCategoryIconPipe,
    ExpenseCategoryColorPipe,
    AddExpenseFormComponent,
  ],
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
