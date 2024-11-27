import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { IExpense } from '../expense/expense.interface';
import { EXPENSE_CATEGORIES, ExpenseCategory } from '../expense/expense-category.types';
import { EXPENSE_CURRENCIES, ExpenseCurrency } from '../expense/expense-currency.types';

// TODO move to shared
type SimpleForm<T extends object> = {
  [P in keyof T]: FormControl<T[P]>;
};

type AddExpenseForm = Omit<SimpleForm<IExpense>, 'amount' | 'date'> & {
  amount: FormControl<number | null>;
  date: FormControl<Date | null>;
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
    const date = this.form.getRawValue().date ?? new Date();

    return {
      ...this.form.getRawValue(),
      amount,
      date,
    };
  }
}
