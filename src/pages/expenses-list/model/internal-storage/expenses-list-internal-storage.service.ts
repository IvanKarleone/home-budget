import { inject, Injectable, signal } from '@angular/core';
import { InternalStorageService } from '@shared/api';

import { IExpense } from '../expense/expense.interface';

@Injectable()
export class ExpensesListInternalStorageService {
  private readonly internalStorage = inject(InternalStorageService);

  private readonly _expensesList = signal<IExpense[]>([]);
  public expensesList = this._expensesList.asReadonly();

  constructor() {
    const initExpensesList = this.internalStorage.getObjectItem<IExpense[]>() ?? [];

    this._expensesList.set(initExpensesList);
  }

  addExpense(expense: IExpense): void {
    this._expensesList.update(expensesList => [expense, ...expensesList]);

    this.internalStorage.setItem(this.expensesList());
  }
}
