import { inject, Injectable, signal } from '@angular/core';
import { LocalStorageService } from '@shared/api';
import { TuiDay } from '@taiga-ui/cdk';

import type { IExpense } from '../../model/expense/expense.interface';

type ExpenseStorageItem = Omit<IExpense, 'date'> & { date: string };

@Injectable()
export class ExpensesStorageService {
  private readonly storage = inject(LocalStorageService);
  private readonly key = 'expenses';

  private readonly _items = signal<IExpense[]>([]);
  public items = this._items.asReadonly();

  constructor() {
    const initItems =
      this.storage
        .getObjectItem<ExpenseStorageItem[]>(this.key)
        ?.map(expense => ({ ...expense, date: TuiDay.jsonParse(expense.date) })) ?? [];

    this._items.set(initItems);
  }

  addExpense(expense: IExpense): void {
    this._items.update(items => [expense, ...items]);

    this.storage.setObjectItem(this.items(), this.key);
  }
}
