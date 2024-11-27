import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { IExpense } from '@pages/expenses-list/model/expense/expense.interface';
import {
  INTERNAL_STORAGE_KEY,
  InternalLocalStorageService,
  InternalStorageService,
} from '@shared/api';
import { TuiAlertService, TuiIcon } from '@taiga-ui/core';
import { take } from 'rxjs';

import { ExpensesListInternalStorageService } from '../../model/internal-storage/expenses-list-internal-storage.service';
import { AddExpenseFormComponent } from '../add-expense-form/add-expense-form.component';
import { ExpenseCategoryColorPipe } from '../expense-category-color/expense-category-color.pipe';
import { ExpenseCategoryIconPipe } from '../expense-category-icon/expense-category-icon.pipe';
import { ExpenseCurrencySignPipe } from '../expense-currency-sign/expense-currency-sign.pipe';

@Component({
  selector: 'hb-expenses-list',
  standalone: true,
  imports: [
    NgClass,
    TuiIcon,
    ExpenseCurrencySignPipe,
    ExpenseCategoryIconPipe,
    ExpenseCategoryColorPipe,
    AddExpenseFormComponent,
  ],
  templateUrl: './expenses-list.component.html',
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 16px;
    }
  `,
  providers: [
    ExpensesListInternalStorageService,
    {
      provide: INTERNAL_STORAGE_KEY,
      useValue: 'expenses-list',
    },
    {
      provide: InternalStorageService,
      useClass: InternalLocalStorageService,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpensesListComponent {
  protected readonly expensesListInternalStorage = inject(ExpensesListInternalStorageService);

  private readonly alerts = inject(TuiAlertService);

  addExpense(expense: IExpense): void {
    this.expensesListInternalStorage.addExpense(expense);

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
