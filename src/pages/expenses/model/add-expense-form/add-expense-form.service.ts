import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TuiDay } from '@taiga-ui/cdk';

import type { IExpense } from '../expense/expense.interface';
import type { ExpenseCategory } from '../expense/expense-category.types';
import { EXPENSE_CATEGORIES } from '../expense/expense-category.types';
import type { ExpenseCurrency } from '../expense/expense-currency.types';
import { EXPENSE_CURRENCIES } from '../expense/expense-currency.types';

// TODO move to shared
type SimpleForm<T extends object> = {
  [P in keyof T]: FormControl<T[P]>;
};

type AddExpenseForm = Omit<SimpleForm<IExpense>, 'amount' | 'date'> & {
  amount: FormControl<number | null>;
  date: FormControl<TuiDay | null>;
};

@Injectable()
export class AddExpenseFormService {
  readonly form = new FormGroup<AddExpenseForm>({
    amount: new FormControl(null, [Validators.required]),
    date: new FormControl(null, [Validators.required]),
    currency: new FormControl<ExpenseCurrency>(EXPENSE_CURRENCIES[0], {
      nonNullable: true,
      validators: [Validators.required],
    }),
    category: new FormControl<ExpenseCategory>(EXPENSE_CATEGORIES[0], {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  getValue(): IExpense {
    const amount = this.form.getRawValue().amount ?? 0;
    const date = this.form.getRawValue().date ?? new TuiDay(2000, 0, 1);

    return {
      ...this.form.getRawValue(),
      amount,
      date,
    };
  }
}
