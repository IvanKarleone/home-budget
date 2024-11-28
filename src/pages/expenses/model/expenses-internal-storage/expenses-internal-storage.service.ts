import { inject, Injectable, signal } from '@angular/core';
import { InternalStorageService } from '@shared/api';

import { IExpense } from '../expense/expense.interface';

@Injectable()
export class ExpensesInternalStorageService {
  private readonly internalStorage = inject(InternalStorageService);

  private readonly _items = signal<IExpense[]>([]);
  public items = this._items.asReadonly();

  constructor() {
    const initItems = this.internalStorage.getObjectItem<IExpense[]>() ?? [];

    this._items.set(initItems);
  }

  addExpense(expense: IExpense): void {
    this._items.update(items => [expense, ...items]);

    this.internalStorage.setItem(this.items());
  }
}
