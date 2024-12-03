import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ExpensesAlertService } from '@pages/expenses/model/expenses-alert/expenses-alert.service';

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
  providers: [ExpensesStorageService, ExpensesAlertService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpensesComponent {
  protected readonly expensesStorage = inject(ExpensesStorageService);
  protected readonly expensesAlert = inject(ExpensesAlertService);

  addExpense(expense: IExpense): void {
    this.expensesStorage.addExpense(expense);
    this.expensesAlert.addExpense(expense.amount, expense.currency);
  }
}
