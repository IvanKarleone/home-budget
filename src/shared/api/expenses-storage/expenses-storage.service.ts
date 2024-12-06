import { inject, Injectable, signal } from '@angular/core';
import { TuiDay } from '@taiga-ui/cdk';

import type { IExpense } from '../../model/expense/expense.interface';
import { LocalStorageService } from '../local-storage/local-storage.service';

type ExpenseStorageItem = Omit<IExpense, 'date'> & { date: string };

@Injectable({
  providedIn: 'root',
})
export class ExpensesStorageService {
  private readonly storage = inject(LocalStorageService);
  private readonly key = 'expenses';

  private readonly _items = signal<IExpense[]>(this.getInitItems());
  public items = this._items.asReadonly();

  add(expense: IExpense): void {
    this._items.update(items => [expense, ...items]);

    this.storage.setObjectItem(this.items(), this.key);
  }

  update(): void {
    console.log('update');
  }

  delete(expenseIndex: number): void {
    this._items.update(items => {
      const itemsAfterDelete = [...items];

      itemsAfterDelete.splice(expenseIndex, 1);

      return itemsAfterDelete;
    });

    this.storage.setObjectItem(this.items(), this.key);
  }

  private getInitItems(): IExpense[] {
    return (
      this.storage
        .getObjectItem<ExpenseStorageItem[]>(this.key)
        ?.map(expense => ({ ...expense, date: TuiDay.jsonParse(expense.date) })) ?? []
    );
  }
}
