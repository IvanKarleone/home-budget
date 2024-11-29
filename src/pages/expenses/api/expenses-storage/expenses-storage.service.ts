import { inject, Injectable, signal } from '@angular/core';
import { LocalStorageService } from '@shared/api';

import type { IExpense } from '../../model/expense/expense.interface';

@Injectable()
export class ExpensesStorageService {
  private readonly storage = inject(LocalStorageService);
  private readonly key = 'expenses';

  private readonly _items = signal<IExpense[]>([]);
  public items = this._items.asReadonly();

  constructor() {
    const initItems = this.storage.getObjectItem<IExpense[]>(this.key) ?? [];

    this._items.set(initItems);
  }

  addExpense(expense: IExpense): void {
    this._items.update(items => [expense, ...items]);

    this.storage.setObjectItem(this.items(), this.key);
  }
}
